import fitz # PyMuPDF
import io
import os
from PIL import Image

pdf_file = r"c:\Users\dell\Desktop\Rani\ramchandani\public\Rani Ramchandani Foundation Profile-2.pdf"
output_dir = r"c:\Users\dell\Desktop\Rani\ramchandani\public\extracted_images"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# open the file
pdf_document = fitz.open(pdf_file)

image_count = 0

for page_index in range(len(pdf_document)):
    page = pdf_document[page_index]
    image_list = page.get_images(full=True)
    
    # printing number of images found in this page
    if image_list:
        print(f"[+] Found a total of {len(image_list)} images in page {page_index}")
    else:
        print(f"[!] No images found on page {page_index}")
        
    for image_index, img in enumerate(image_list, start=1):
        # get the XREF of the image
        xref = img[0]
        
        # extract the image bytes
        base_image = pdf_document.extract_image(xref)
        image_bytes = base_image["image"]
        
        # get the image extension
        image_ext = base_image["ext"]
        
        image_name = f"image_{page_index+1}_{image_index}.{image_ext}"
        image_path = os.path.join(output_dir, image_name)
        
        # load it to PIL
        image = Image.open(io.BytesIO(image_bytes))
        
        # save it to local
        image.save(open(image_path, "wb"))
        print(f"[+] Image saved at {image_path}")
        image_count += 1

print(f"Total {image_count} images extracted.")

from PIL import Image
import numpy as np

def crop_and_resize():
    try:
        # Load the image
        img_path = 'public/logo.png'
        img = Image.open(img_path)
        img = img.convert("RGBA")

        # Get the bounding box of the non-transparent part
        bbox = img.getbbox()
        if bbox:
            print(f"Original Size: {img.size}")
            print(f"Cropping to bounding box: {bbox}")
            img_cropped = img.crop(bbox)
        else:
            print("Image is fully transparent!")
            return

        # Create a square canvas to maintain aspect ratio without distortion
        max_dim = max(img_cropped.size)
        square_img = Image.new("RGBA", (max_dim, max_dim), (0, 0, 0, 0))
        
        # Paste centered
        offset = ((max_dim - img_cropped.size[0]) // 2, (max_dim - img_cropped.size[1]) // 2)
        square_img.paste(img_cropped, offset)

        # Save as favicon.ico with multiple sizes
        icon_sizes = [(16, 16), (32, 32), (48, 48), (64, 64)]
        square_img.save('public/favicon.ico', sizes=icon_sizes)
        print("Successfully generated maximized public/favicon.ico")

    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    crop_and_resize()

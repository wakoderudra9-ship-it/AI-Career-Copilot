import fitz

def extract_text_from_pdf(file_path: str):
    print(f"Opening PDF: {file_path}")

    document = fitz.open(file_path)

    text = ""

    for page in document:
        page_text = page.get_text()

        print("---------------")
        print(page_text)
        print("---------------")

        text += page_text

    document.close()

    print("Final extracted text:")
    print(text)

    return text
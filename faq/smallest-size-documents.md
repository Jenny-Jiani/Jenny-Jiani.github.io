---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How can I reduce the size of documents in PDF, TIFF or JPEG format?
keywords: Dynamic Web TWAIN, Document Saving, smallest size document
breadcrumbText: How can I reduce the size of documents in PDF, TIFF or JPEG format?
description: How can I reduce the size of documents in PDF, TIFF or JPEG format?
---

# Document Saving

## How can I reduce the size of documents in PDF, TIFF or JPEG format?

There are a few things that you can try to reduce the size of a resulting file

- Scan in grayscale or black & white instead of RGB;

- Convert the images to grayscale or black & white before the save or upload call. Read more <a href="https://www.dynamsoft.com/web-twain/docs/indepth/features/edit.html#working-with-pixels-and-bit-depth" target="_blank">here</a>;

- Scan in a lower resolution;

- Convert the images to a lower resolution (DPI). Read more <a href="https://www.dynamsoft.com/web-twain/docs/indepth/features/edit.html#working-with-pixels-and-bit-depth" target="_blank">here</a>;

- [Optional] If the resulting file is in the JPEG format (.jpg) or is a TIF or PDF that is encoded by the JPEG standard, you can set <a href="https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_IO.html?ver=latest#jpegquality" target="_blank">JPEGQuality</a> to a lower value.

    Before setting the JPEGQuality, set the compression type to the JPEG standard as outlined below.

    Before saving the file,

    - set the compression type to the JPEG standard:
  <a href="https://www.dynamsoft.com/web-twain/docs/info/api/Dynamsoft_Enum.html?ver=latest#dynamsoftdwtenumdwt_pdfcompressiontype" target="_blank">PDFCompressionType</a> = 5 (PDF_JPEG)
  <a href="https://www.dynamsoft.com/web-twain/docs/info/api/Dynamsoft_Enum.html?ver=latest#dynamsoftdwtenumdwt_tiffcompressiontype" target="_blank">TIFFCompressionType</a> = 7 (TIFF_JPEG)

    - set the <a href="https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_IO.html?ver=latest#jpegquality" target="_blank">JPEGQuality</a> = [a lower value]

    Note that black & white image cannot be saved in the JPEG format. To reduce the size, please convert the image to grayscale.

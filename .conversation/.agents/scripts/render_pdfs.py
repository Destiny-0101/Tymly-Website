from pathlib import Path
import fitz

for source in [Path('attached_assets/Figma_Design__1791622528854.pdf'), Path('attached_assets/Tymly_Product_Brief_1791622528953.pdf')]:
    doc = fitz.open(source)
    print(f'{source.name}: {len(doc)} pages')
    out = Path('.agents/outputs') / source.stem
    out.mkdir(parents=True, exist_ok=True)
    for i, page in enumerate(doc):
        pix = page.get_pixmap(matrix=fitz.Matrix(1.35, 1.35), alpha=False)
        pix.save(out / f'page-{i+1:02}.png')
        print(f'  page {i+1}: {page.rect.width:.0f}x{page.rect.height:.0f} pt -> {pix.width}x{pix.height}px')

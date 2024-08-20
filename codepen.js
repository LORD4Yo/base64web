document.addEventListener('DOMContentLoaded', () => {
    const htmlCode = document.getElementById('htmlCode');
    const cssCode = document.getElementById('cssCode');
    const jsCode = document.getElementById('jsCode');
    const previewFrame = document.getElementById('previewFrame');

    function updatePreview() {
        const html = htmlCode.value;
        const css = `<style>${cssCode.value}</style>`;
        const js = `<script>${jsCode.value}<\/script>`;
        previewFrame.contentDocument.open();
        previewFrame.contentDocument.write(html + css + js);
        previewFrame.contentDocument.close();
    }

    htmlCode.addEventListener('input', updatePreview);
    cssCode.addEventListener('input', updatePreview);
    jsCode.addEventListener('input', updatePreview);

    // Initial preview update
    updatePreview();
});

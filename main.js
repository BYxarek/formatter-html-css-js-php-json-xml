        const codeEditor = CodeMirror.fromTextArea(document.getElementById('codeInput'), {
            mode: 'htmlmixed',
            theme: 'material',
            lineNumbers: true
        });
        function formatCode() {
            const codeInput = codeEditor.getValue();
            let formattedCode = '';
            if (codeInput.trim().startsWith('<')) {
                formattedCode = html_beautify(codeInput);
            } else if (codeInput.trim().startsWith('/*') || codeInput.trim().startsWith('.')) {
                formattedCode = css_beautify(codeInput);
            } else if (codeInput.trim().startsWith('<?php')) {
                formattedCode = js_beautify(codeInput); // Используем js_beautify для PHP
            } else if (codeInput.trim().startsWith('{') || codeInput.trim().startsWith('[')) {
                formattedCode = js_beautify(codeInput); // Используем js_beautify для JSON
            } else if (codeInput.trim().startsWith('<')) {
                formattedCode = html_beautify(codeInput); // Используем html_beautify для XML
            } else {
                formattedCode = js_beautify(codeInput);
            }
            document.getElementById('formattedOutput').textContent = formattedCode;
        }
        function copyToClipboard() {
            const formattedCode = document.getElementById('formattedOutput').textContent;
            navigator.clipboard.writeText(formattedCode).then(() => {
                showNotification();
            }).catch(err => {
                console.error('Ошибка при копировании: ', err);
            });
        }
        function showNotification() {
            const notification = document.getElementById('notification');
            notification.style.display = 'block';
            setTimeout(() => {
                notification.style.display = 'none';
            }, 1500);
        }
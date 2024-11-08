<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Code Formatter Description</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: #f0f0f0;
        }
        .container {
            width: 80%;
            max-width: 1200px;
            background: #fff;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
        }
        h1, h2 {
            color: #007bff;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Code Formatter Description</h1>
        <p>This HTML code creates a web page with code formatting functionality. Here are the main components and their functions:</p>
        <h2>HTML:</h2>
        <ul>
            <li>Creates the structure of the page with the title "Code Formatter".</li>
            <li>Includes a text area for code input and buttons for formatting and copying the code.</li>
        </ul>
        <h2>CSS:</h2>
        <ul>
            <li>Defines styles for page elements, including the container, buttons, and notifications.</li>
        </ul>
        <h2>CodeMirror:</h2>
        <ul>
            <li>Used to create a code editor with syntax highlighting and line numbers.</li>
            <li>Various modes are connected to support HTML, CSS, JavaScript, PHP, and other languages.</li>
        </ul>
        <h2>JS-Beautify:</h2>
        <ul>
            <li>A library for code formatting.</li>
            <li>Used for formatting HTML, CSS, JavaScript, PHP, and JSON.</li>
        </ul>
        <h2>JavaScript:</h2>
        <ul>
            <li>Initializes the CodeMirror editor.</li>
            <li>The <code>formatCode()</code> function formats the entered code depending on its type.</li>
            <li>The <code>copyToClipboard()</code> function copies the formatted code to the clipboard and shows a notification.</li>
        </ul>
        <h2>How to use:</h2>
        <ul>
            <li>Enter the code in the text area.</li>
            <li>Click the "Format" button to format the code.</li>
            <li>The formatted code will appear below.</li>
            <li>Click the "Copy Code" button to copy the formatted code to the clipboard.</li>
        </ul>
    </div>
</body>
</html>

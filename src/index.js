const fileInput = document.getElementById('file')
const preview = document.getElementById('j-preview')
const preCtx = preview.getContext('2d')
const generateBtn = document.getElementById('generate')
const content = document.getElementById('j-content')

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const CANVASWIDTH = 500
const CANVASHEIGHT = 500

const fr = new FileReader()

fileInput.addEventListener('change', e => {
    getFileInfo(e.target.files[0])
})

// 读取文件 && 预览
function getFileInfo (file) {
    fr.onload = () => {
        preview.src = fr.result
    }
    fr.readAsDataURL(file)
}

generateBtn.addEventListener('click', e => {
    const text = content.value
    ctx.drawImage(preview, 0, 0)
    ctx.font = "48px serif";
    ctx.fillText(text, 100, 100)
})

// 初始化图片
function initCanvas () {
    const img = document.getElementById('j-init')
    img.onload = () => {
        const sw = img.width
        const sh = img.height
        preCtx.drawImage(img, 0, 0)
    }
    initGenerate()
}

function initGenerate () {
    canvas.width = CANVASWIDTH
    canvas.height = CANVASHEIGHT
}

initCanvas()
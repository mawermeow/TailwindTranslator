import {sourcePath} from "../../utils/path"
const wouldSplit = true

const SplitImg = ({ src, className = '', splitsNum = 5, ...rest }) => {
    if (wouldSplit) {
        const baseName = src.substring(src.lastIndexOf('/') + 1, src.lastIndexOf('.'))
        const extension = src.substring(src.lastIndexOf('.'))
        const folderPath = src.substring(0, src.lastIndexOf('/') + 1)
        const imagePaths = Array.from({ length: splitsNum * splitsNum }, (_, i) => `${folderPath}${baseName}_${i + 1}${extension}`)

        return (
            <div className={`grid grid-cols-${splitsNum} grid-rows-${splitsNum} w-full h-full ${className}`} {...rest}>
                {imagePaths.map((el, i) => {
                    const row = Math.floor(i / splitsNum)
                    const col = i % splitsNum
                    const isOddRow = row % 2 !== 0
                    const isOddCol = col % 2 !== 0
                    const isFirstRow = row === 0
                    const isFirstCol = col === 0

                    const style = {
                        gridColumnStart: col + 1,
                        gridColumnEnd: col + 2,
                        gridRowStart: row + 1,
                        gridRowEnd: row + 2,
                        justifySelf: isOddRow ? 'end' : 'start',
                        alignSelf: isOddCol ? 'end' : 'start',
                        ...(isFirstRow && { justifySelf: 'start' }),
                        ...(isFirstCol && { alignSelf: 'start' }),
                    }

                    return <img key={i} src={el.replace('./', sourcePath).replace('images_origin', 'images_split')} style={style} className={`w-full h-full pointer-events-none ${className}`}/>
                })}
            </div>
        )
    }

    return <img className={`w-full h-full pointer-events-none ${className}`} src={src.replace('./', sourcePath)} {...rest} />
}

export default SplitImg
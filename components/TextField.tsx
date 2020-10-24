import React, { useRef, useState } from 'react'

interface Props {
    text: string
}
interface TextNode {
    text: string
}

export const TextField: React.FC<Props> = ({ text }) => {
    const [userInput, setUserInput] = useState<TextNode>({ text: 'hello' })
    const inputRef = useRef<HTMLInputElement>()
    const divRef = useRef<HTMLDivElement>()
    return (
        <div ref={divRef}>
            <input ref={inputRef} className='bg-blue-500' placeholder={text} />
        </div>
    )
}

function UserInput({ text, setText, onSubmit }){
    return (
            <div className="max-w-lg m-1 p-1 flex flex-col">
            <h1 className="font-(family-name:--font-sans) font-semibold pb-1 text-sm">Enter Text</h1>
            <textarea name="userInput" id="in-text" className="p-2 shadow-lg text-sm outline-none font-(family-name:--font-sans) font-semibold text-gray-600 resize-none bg-gray-200 rounded-sm" cols={50} rows={5} placeholder="Enter text to translate" value={text} onChange={(e)=>setText(e.target.value)}></textarea>
            <button className="w-full bg-black font-semibold text-white font-(family-name:--font-sans) text-sm py-2 shadow-lg mt-5 rounded-sm cursor-pointer hover:bg-[#1D2128]" onClick={onSubmit}>Get Morse</button>
        </div>
    )
}

export default UserInput


// Start with Adjusting width for userInput component, make it fix and dynamically adjustable
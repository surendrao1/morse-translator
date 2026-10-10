function MorseCode({ morse }){
    // if (!morse) return null

    return (
            <div className="max-w-lg m-1 p-1 flex flex-col">
            <h1 className="font-(family-name:--font-sans) font-semibold pb-1 text-sm">Morse Translation</h1>
            <textarea name="userInput" id="in-text" className="p-2 shadow-lg text-sm outline-none font-(family-name:--font-sans) font-semibold text-gray-600 resize-none bg-gray-200 rounded-sm" cols={50} rows={5} placeholder="Morse translation" value={morse}></textarea>
            </div>
    )
}

export default MorseCode
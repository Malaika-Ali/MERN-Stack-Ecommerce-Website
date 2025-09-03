const highlightMatch = (text, query) => {
    // if there's no search Query just return the text as it is
    if (!query) return text;

    // dynamically make the search query passed as regular expression
    // the paranthesis mean to capture whatever looks like the search query 
    // gi(g-> global, all instances not just FiSmartphone, i-> case insensitive)
    const regex = new RegExp(`(${query})`, "gi");
    // split text by the delimeter regex
    // make the part of the text matching the regex as one element and the rest as other element
    const parts = text.split(regex);

    // loop through the splitted array of text
    // change the bg of the element matching the regex
    return parts.map((part, i) =>
        regex.test(part) ? (
            <span key={i} className="bg-yellow-200 rounded px-1">
                {part}
            </span>
        ) : (
            part
        )
    );
};

export default highlightMatch
import { useState, useEffect } from 'react';


function useFetchContent(importURL: string, attribute?: string): any {

    const [content, setContent] = useState<any>(null);

    useEffect(() => {
        fetch(importURL)
            .then((response: Response) => response.json())
            .then((data: any) => {
                setContent(attribute ? data[attribute] : data);
            })
            .catch((error: Error) => {
                console.error('Error:', error);
            });
    }, [importURL, attribute]);

    return content;
}

export default useFetchContent;

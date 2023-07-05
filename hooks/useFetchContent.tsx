'use client'

import { useState, useEffect } from 'react';

interface FetchContent {
    importURL: string;
    attribute?: string;
}

function useFetchContent({ importURL, attribute }: FetchContent): Record<string, unknown> | null {
    const [content, setContent] = useState<Record<string, unknown> | null>(null);

    useEffect(() => {
        fetch(importURL)
            .then(response => response.json())
            .then(data => {
                // If an attribute is specified, return that attribute's value. 
                // If not, return the entire data object.
                setContent(attribute ? data[attribute] : data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [importURL, attribute]);

    return content;
}

export default useFetchContent;

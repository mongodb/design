'use client'

import { createContext, useState } from "react";

interface ContentFilterResult {
	filtered: boolean;
	severity: string;
}

interface OpenAIResult {
	content_filter_results: {
		violence: ContentFilterResult;
		self_harm: ContentFilterResult;
		hate: ContentFilterResult;
		sexual: ContentFilterResult;
	};
	message: {
		content: string;
	}
}

type WriterResults = Array<OpenAIResult>;

interface WriterServerError {
	hasError: boolean;
	code?: number;
	message?: string;
}

interface WriterContext {
	results: WriterResults;
	setResults: React.Dispatch<React.SetStateAction<WriterResults>>;
	isLoading: boolean;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
	error: WriterServerError;
	createFormError: (code: number, message: string) => void;
	clearFormError: () => void;
}

export const WriterContext = createContext<WriterContext>({
	results: [],
	setResults: () => {},
	isLoading: false,
	setIsLoading: () => {},
	error: {
		hasError: false,
	},
	createFormError: () => {},
	clearFormError: () => {},
});

export function WriterProvider({ children }: { children: React.ReactNode }) {
	const [results, setResults] = useState<WriterResults>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<WriterServerError>({ hasError: false });

	// Creates an error and ensures the loading state is set to false.
	function createFormError(code: number, message: string) {
		setError({
			hasError: true,
			code,
			message,
		});

		setIsLoading(false);
	}

	function clearFormError() {
		setError({
			hasError: false,
		});
	};

	return (
		<WriterContext.Provider value={{
			results,
			setResults,
			isLoading,
			setIsLoading,
			error,
			createFormError,
			clearFormError,
		}}>
			{children}
		</WriterContext.Provider>
	);
}

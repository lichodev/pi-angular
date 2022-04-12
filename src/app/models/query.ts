export interface Query {
    id: number | null;
    name: string;
    lastname: string;
    email: string;
    phone: string;
    text: string;
    replied: boolean;
}

export interface QueryResponse {
    text: string;
    questionId: number | null;
}

export interface QuestionResponse {
    question: string;
    response: string;
}
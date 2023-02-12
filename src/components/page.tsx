import { People } from "./people";

export interface Page{
	count: number,
    next: string,
    previous: string,
    results: People,
    
}
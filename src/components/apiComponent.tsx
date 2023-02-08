import React, { useState, useEffect } from "react";
//import { setEnvironmentData } from "worker_threads";

export const APIComponent: React.FunctionComponent = () => {
	const [data, setData] = useState<{
		name: string;
	}>();

	useEffect(() => {
		let isMounted = true;
		fetch("/api")
		.then((response)=> response.json())
		.then((data) => {
			if (isMounted) {
				setData(data);
			}
		});
	return () => {
		isMounted = false;
	};
}, []);

return <div>{data && <div role = "contentinfo">Name is {data.name}</div>}</div>

}
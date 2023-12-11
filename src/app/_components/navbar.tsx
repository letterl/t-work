
// import { Input } from "@nextui-org/input";

import { Input } from "@nextui-org/react";











export const Navbar = () => {
	const searchInput = (
		<Input
			aria-label="Search"
			classNames={{
				inputWrapper: "bg-default-100",
				input: "text-sm",
			}}
			labelPlacement="outside"
			placeholder="Search..."

			type="search"
		/>
	);

	return (
		
				<div>{searchInput}</div>
	);
};

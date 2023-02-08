import React from 'react';
import { render, screen } from '@testing-library/react';
import { SideBar } from './sideBar'

/*test('renders a name', () => {
	const items = [
		{
			name: "test",
			href: "/test"
		}
	]
	render(<SideBar items={items}/>);
	const divElement = screen.getByRole("contentinfo");
	expect(divElement).toHaveTextContent("Name is Jack");
	expect(divElement).toHaveAttribute("role", "contentinfo");
  });*/

  test('renders a name1', () => {
	const items = [
		{
			name: "test",
			href: "/test"
		}
	]
	render(<SideBar items={items}/>);
	const achorElements = screen.getAllByRole("navigation");
	expect(achorElements[0]).toHaveTextContent(items[0].name);
	expect(achorElements[0]).toHaveAttribute("href", items[0].href);
  });
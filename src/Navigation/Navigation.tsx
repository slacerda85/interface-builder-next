import { ReactElement, useEffect, useState } from 'react';

// API
import navigationApi, { Area, Page } from '../../api/controllers/navigationApi';

////////////////////////////////////////////////////////////////////////////////////////////////////

const languages = [
	{
		languageId: 1,
		languageCode: 'pt',
	},
	{
		languageId: 2,
		languageCode: 'en',
	},
];

export default function Navigation(): ReactElement {
	const [navigation, setNavigation] = useState<Area[]>([]);

	useEffect(() => {
		navigationApi.getNavigation().then(navigation => {
			setNavigation(navigation);
		});
	}, []);

	// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

	return (
		<div>
			{navigation.map(area => (
				<NavigationArea key={area.areaId} {...area} />
			))}
		</div>
	);
}

function NavigationArea({ L10n, pages }: Area): ReactElement {
	return (
		<div>
			{languages.map(language => {
				const { languageCode } = language;

				return (
					<div key={languageCode}>
						<div>{L10n[languageCode].areaTitle}</div>
						<div>
							{pages.map(page => (
								<NavigationPage key={page.pageId} {...page} />
							))}
						</div>
					</div>
				);
			})}
		</div>
	);
}

function NavigationPage({ L10n }: Page): ReactElement {
	return (
		<div>
			{languages.map(language => {
				const { languageCode } = language;

				return (
					<div key={languageCode}>
						<div>{L10n[languageCode].pageTitle}</div>
					</div>
				);
			})}
		</div>
	);
}

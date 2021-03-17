import api from '../webApi';

import { getNavigationResponse } from './samples/navigationSamples';

// /////////////////////////////////////////////////////////////////////////////////////////////////

export interface Area {
	areaId: number;
	areaUuid: string;
	areaTitle: string;
	areaSlug: string;
	L10n: { [key: string]: AreaL10n };
	pages: Page[];
}

interface AreaL10n {
	areaTitle: string;
	areaSlug: string;
}

export interface Page {
	pageId: number;
	pageUuid: string;
	pageTitle: string;
	pageSlug: string;
	pageType: string;
	L10n: { [key: string]: PageL10n };
}

interface PageL10n {
	pageTitle: string;
	pageSlug: string;
	pageUrl: string;
}

export const getNavigation = (): Promise<Area[]> => {
	return new Promise(resolve => {
		// api.get(`/navigation`)
		const navigation: Area[] = getNavigationResponse.data;
		resolve(navigation);
	});
};

const navigationApi = {
	getNavigation,
};

export default navigationApi;

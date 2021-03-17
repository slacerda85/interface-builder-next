import axios from 'axios'

// Definição da URL padrão da API //////////////////////////////////////////////////////////////////
// Sete "useLocalApi" como TRUE para usar a API rodando em sua própria máquina, na porta 3003.
// O endereço da API local pode ser customizado no arquivo .env.development.local
const useLocalWebApi = false
const useLocalMailingApi = false
const useLocalCoreApi = false

let webApiBaseUrl
let mailingApiBaseUrl
let coreApiBaseUrl
let instanceId

if (process.env.NODE_ENV === 'development') {
	webApiBaseUrl = useLocalWebApi
		? process.env.REACT_APP_WEB_API_URL_LOCAL
		: process.env.REACT_APP_WEB_API_URL

	mailingApiBaseUrl = useLocalMailingApi
		? process.env.REACT_APP_MAILING_API_URL_LOCAL
		: process.env.REACT_APP_MAILING_API_URL

	coreApiBaseUrl = useLocalCoreApi
		? process.env.REACT_APP_CORE_API_URL_LOCAL
		: process.env.REACT_APP_CORE_API_URL

	instanceId = process.env.REACT_APP_INSTANCE_ID

	// No modo de desenvolvimento, loga as URLs e o ID do instância no console
	console.log('[] webApiBaseUrl', webApiBaseUrl)
	console.log('[] mailingApiBaseUrl', mailingApiBaseUrl)
	console.log('[] coreApiBaseUrl', coreApiBaseUrl)
	console.log('[] instanceId', instanceId)
} else {
	// URL das APIs em produção, injetadas no window pelo Router
	webApiBaseUrl = (window as any).WEB_API_URL
	mailingApiBaseUrl = (window as any).MAILING_API_URL
	coreApiBaseUrl = (window as any).CORE_API_URL
	instanceId = (window as any).INSTANCE.instanceId
}

export const webApi = axios.create({
	baseURL: webApiBaseUrl,
	headers: {
		Authorization: localStorage.getItem('@sumaq:token'),
		'X-Instance-Id': instanceId,
	},
})

export const mailingApi = axios.create({
	baseURL: mailingApiBaseUrl,
	headers: {
		Authorization: localStorage.getItem('@sumaq:token'),
		'X-Instance-Id': instanceId,
	},
})

export const coreApi = axios.create({
	baseURL: coreApiBaseUrl,
	headers: {
		Authorization: localStorage.getItem('@sumaq:token'),
		'X-Instance-Id': instanceId,
	},
})

export default webApi

// /////////////////////////////////////////////////////////////////////////////////////////////////

export const CancelToken = axios.CancelToken

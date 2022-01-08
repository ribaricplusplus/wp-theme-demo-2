const path = require('path')
const { readConfig } = require('@wordpress/env/lib/config')

async function getInstallPath() {
	const { workDirectoryPath } = await readConfig(
		path.join(__dirname, '../../.wp-env.json')
	)
	return workDirectoryPath
}

async function printInstallPath() {
	const insPath = await getInstallPath()
	console.log(insPath)
}

module.exports = { printInstallPath }

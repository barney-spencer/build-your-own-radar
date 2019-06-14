require('./common')
require('./images/logo.png')
require('./images/radar_legend.png')
require('./data/radar.csv')

const GoogleSheetInput = require('./util/factory')

GoogleSheetInput().build()

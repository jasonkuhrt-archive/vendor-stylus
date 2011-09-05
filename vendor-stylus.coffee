stylus = require "stylus"
nodes  = stylus.nodes
utils  = stylus.utils


vendorProperties =
    "user-select":
        prefixes: "ms o webkit moz"

exports.vendor = (prop,val)->
    for prefix in vendor_properties[prop].prefixes
        console.log prefix
    nodes.false

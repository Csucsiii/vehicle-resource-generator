---@diagnostic disable: undefined-global
resource_manifest_version '77731fab-63ca-442c-a67b-abc70f28dfa5'
game 'gta5'

version '1.0.0'
author 'Csucsi'
repository 'https://github.com/Csucsiii/vehicle-resource-generator'
description 'All Vehicles'

files {
    "data/**/*"
}

data_file 'VEHICLE_LAYOUTS_FILE' 'data/**/vehiclelayouts.meta'
data_file 'HANDLING_FILE' 'data/**/handling.meta'
data_file 'VEHICLE_METADATA_FILE' 'data/**/vehicles.meta'
data_file 'CARCOLS_FILE' 'data/**/carcols.meta'
data_file 'VEHICLE_VARIATION_FILE' 'data/**/carvariations.meta'
-- data_file 'DLCTEXT_FILE' 'vehicles/data/**/dlctext.meta'
-- data_file 'CARCONTENTUNLOCKS_FILE' 'vehicles/data/**/carcontentunlocks.meta'
-- data_file 'JDM_RIMS_CONTENT_UNLOCKS' 'vehicles/data/**/jdmrimscontentunlocks.meta'
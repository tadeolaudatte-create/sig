var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Malang_1 = new ol.format.GeoJSON();
var features_Malang_1 = format_Malang_1.readFeatures(json_Malang_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Malang_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Malang_1.addFeatures(features_Malang_1);
var lyr_Malang_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Malang_1, 
                style: style_Malang_1,
                popuplayertitle: 'Malang',
                interactive: true,
                title: '<img src="styles/legend/Malang_1.png" /> Malang'
            });
var lyr_kesesuain_pemukiman_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'kesesuain_pemukiman<br />\
    <img src="styles/legend/kesesuain_pemukiman_2_0.png" /> Tidak Sesuai<br />\
    <img src="styles/legend/kesesuain_pemukiman_2_1.png" /> Cukup Sesuai<br />\
    <img src="styles/legend/kesesuain_pemukiman_2_2.png" /> Sangat Sesuai<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/kesesuain_pemukiman_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12495410.496297, -945844.694311, 12579431.806804, -865047.747371]
        })
    });

lyr_OSMStandard_0.setVisible(true);lyr_Malang_1.setVisible(true);lyr_kesesuain_pemukiman_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Malang_1,lyr_kesesuain_pemukiman_2];
lyr_Malang_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'FCODE': 'Feature Code', 'REMARK': 'Catatan', 'METADATA': 'METADATA', 'SRS_ID': 'Spatial Reference Spatial Identifier', 'KDBBPS': 'Kode BPS Kabupaten/Kota', 'KDCBPS': 'Kode BPS Kecamatan/Distrik', 'KDCPUM': 'Kode PUM Kecamatan/Distrik', 'KDEBPS': 'Kode BPS Kelurahan/Desa', 'KDEPUM': 'Kode PUM Kelurahan/Desa', 'KDPBPS': 'Kode BPS Provinsi', 'KDPKAB': 'Kode PUM Kabupaten/Kota', 'KDPPUM': 'Kode PUM Provinsi', 'LUASWH': 'Luas Wilayah Menurut Peraturan (HA)', 'TIPADM': 'Tipe Administrasi', 'WADMKC': 'Nama wilayah administrasi Kecamatan atau Distrik', 'WADMKD': 'Nama wilayah administrasi Kelurahan atau Desa', 'WADMKK': 'Nama wilayah administrasi Kabupaten/ Kota', 'WADMPR': 'Nama wilayah administrasi Provinsi', 'WIADKC': 'Nama wilayah induk administrasi Kecamatan/Distrik', 'WIADKK': 'Nama wilayah induk administrasi Kebupaten/ Kota', 'WIADPR': 'Nama wilayah induk administrasi Propinsi', 'WIADKD': 'Nama wilayah induk administrasi Kelurahan/Desa 
', 'UUPP': 'Referensi Peraturan', 'luas': 'luas', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Malang_1.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': 'ValueMap', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'UUPP': '', 'luas': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_Malang_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_Malang_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const cropName = urlParams.get('crop');
let infocrop=document.querySelector("#crop-info");
    if (cropName) {
        // Example data (replace with actual data)
        const cropData = {
            'rice': {
                'image': 'cropimgs/rice.webp',
                'climate': 'Rice crop needs a hot and humid climate. It is best suited to regions which have high humidity, prolonged sunshine and an assured supply of water.The average temperature required throughout to the crop throughout its life ranges from 21 to 37º C. Maximum temp in which the crop can grow is 400C to 42 0C.',
                'soil': 'Paddy is grown in wide range of soil. Fertile riverine alluvial soil is best for rice cultivation. Clayey loam soil in monsoon land is considered to be the best for rice cultivation as water retention capacity of this soil is very high.',
                'fertilizers': 'Nitrogen, phosphorus and potassium are three essential plant nutrients required for rice. Most of the paddy lands have a moderate quantity of such nutrients, but if they are deficient, organic manure or artificial fertilizers have to be used.',
                'production' : 'Transplanting in puddled fields.Broadcasting sprouted seeds in puddled fields(for  Dry or Semi-dry upland cultivation).Transplanting in puddled fields.Broadcasting sprouted seeds in puddled fields(for Wet or lowland cultivation).',
            },
            'wheat': {
                'image': 'cropimgs/wheat.webp',
                'climate': 'Wheat generally grows best in temperatures ranging from 15°C to 24°C (59°F to 75°F) during the growing season. Different varieties of wheat have varying temperature tolerances, but most require cool temperatures during germination and early growth stages, and warmer temperatures during grain filling.',
                'soil': 'Wheat can grow in a variety of soil types, but it thrives best in well-drained soils with good fertility and organic matter content. Here are some characteristics of the ideal soil for wheat cultivation:(Loamy Soil),(Well drained),(fertile)',
                'fertilizers': 'It is desirable that 2 to 3 tonnes of farmyard manure per hectare or some other organic matter is applied 5 or 6 weeks before sowing.Total quantity of Phosphorus and potash and half the quantity of nitrogen should be applied at the time of sowing. Remaining quantity of Nitrogen should be applied at the time of crown root initiation.',
                'production' : 'The wheat crop requires a well-pulverized but compact seed bed for good and uniform germination. Three or four ploughings in the summer, repeated harrowing in the rainy season, followed by three or four cultivations and planking immediately before sowing produce a good, firm seed bed for the dry crop on alluvial soils.',
            },
            'jowar': {
                'image': 'cropimgs/jowar.jpg',
                'climate': 'Sorghum plants are very hardy and can withstand high temperature and drought, however, it is grown in arid regions of U.P, Rajasthan and humid regions of Bengal and Bihar. It may be successfully grown under atmospheric temperature ranging between 15 0C to 40 0C and annual rainfall ranging from 400 to 1000 mm.',
                'soil': 'Sorghum is grown on a variety of soil types but the clayey loam soil rich in humus is found to be the most ideal soil. It may tolerate mild acidity to mild salinity under pH 5.5 to 8.0. A good sorghum soil must have an efficient drainage facilities though, it may withstand water logging more than maize.',
                'fertilizers': 'The fertilizer doses differ from type to type and nature of crop to be grown e.g. local varieties need less quantity than hybrid ones. Similarly, irrigated crop requires higher doses than rainfed ones no matter whether it is a local or high yielding variety. Considering all these points an optimum dose may be found out from the following details: an optimum dose of nitrogen for rainfed high yielding and local varieties of irrigated crop should be 60-80kg/ha while for irrigated high yielding varieties it should be between 120-150 kg/ha. In case of heavy soils one single application gives better results than split application but in case of light soils split application i.e. half basal and remaining half as top-dressing at knee-height stage or 30-35 days after sowing is preferred. Under low rainfall or in rainfed areas top-dressing of nitrogen is not required. On an average a dose of 40-60 kg P2O5/ha is found to be good.',
                'production' : 'Sorghum crop is grown in almost all the seasons of the year. In Northern India conditions it is grown in kharif season but in Southern India the crop is grown during Rabi and summer seasons. Kharif crop should be sown soon after first break of monsoon rains i.e. nearly in last week of June. Therefore, the best sowing time is in last week of June to first week of July depending upon onset of monsoon. Whereas rabi jawar is sown in the month of October to November.',
            },
            'bajra': {
                'image': 'cropimgs/bajra.webp',
                'climate': 'The crop has a wide adaptability as it may grow under different day lengths, temperature and moisture stress. Most of the varieties developed in India are photosensitive which helps in growing the crop during monsoon, rabi and arid season. It requires low annual rainfall ranging between 40-50 cm and dry weather. The crop may tolerate drought but cannot withstand high rainfall of 90 cm or above.',
                'soil': 'Light soils of low inherent fertility good drainage, mild salinity are best type for this crop. Crop does not tolerate soil acidity',
                'fertilizers': 'Nitrogen (N): Urea, Ammonium sulfate, Calcium ammonium nitrate Phosphorus (P): Triple superphosphate, Di-ammonium phosphate (DAP), Monoammonium phosphate (MAP) Potassium (K): Potassium chloride (Muriate of potash), Potassium sulfate Micronutrients: Zinc sulfate, Ferrous sulfate (iron), Magnesium sulfate (magnesium), Copper sulfate, Borax (boron)',
                'production' : 'The crop is harvested when grains become hard enough and contain moisture. Two methods are adopted for harvesting the crop Cutting earheadi) from standing crop followed by cutting of remaining plants laterii) Cutting of entire plants by sticks and stalking the plants for five days in sun for obtaining grains. Grains are separated either by beating the earheads with sticks or by trampling the earheads under bullock feet.',
            },
            'maize': {
                'image': 'cropimgs/maize.webp',
                'climate': 'It is grown under extremely divergent climatic conditions in different parts of the world, ranging from tropical to temperate regions. It is widely cultivated from the sea level upto altitudes of 2,500 m. It can be successfully grown where the night temperature does not go below 15.60C (600F).',
                'soil': 'Maize requires fertile, deep and well drained soils. However, it can be grown on any type of soil, ranging from deep heavy clays to light sandy ones. It is, however, necessary that the pH of the soil does not deviate from the range 7.5 to 8.5 Maize plants, particularly in the seedling stage, are highly susceptible to salinity and water .',
                'fertilizers': 'For obtaining high yield, the maize crop should be heavily manured. Twenty five to thirty cartloads of farmyard manure or compost should be ploughed into the soil before the sowing. For hybrid and composite varieties of maize, 100-120 kg of nitrogen, along with 60 kg of P2O5 and 40 kg of K2O per hectare, is recommended. ',
                'production' : 'The maize crop sown for grain is harvested when the grains are nearly dry and do not contain more than 20 per cent moisture. The appearance of the plant may be misleading, particularly in the case of high yielding hybrids and composites whose grains are dry, while the stalk and leaves may be still green. Ears are removed from the standing crop. Harvested ears are dried in the sun before shelling. In the case of the late-sown crop, farmers prefer to harvest the whole plants and pile them, and the ears are removed are removed later. Maize stalks are used as cattle feed or fuel.',
            },
            'bhendi': {
                'image': 'cropimgs/bhendi.webp',
                'climate': 'Temperate climate',
                'soil': 'Well-drained soil',
                'fertilizers': '',
                'production' : '',
            },
            'cabbage': {
                'image': 'cropimgs/cabbage.webp',
                'climate': 'Temperate climate',
                'soil': 'Well-drained soil',
                'fertilizers': '',
                'production' : '',
            },
            'gavar': {
                'image': 'cropimgs/gavar.webp',
                'climate': 'Temperate climate',
                'soil': 'Well-drained soil',
                'fertilizers': '',
                'production' : '',
            },
            'potato': {
                'image': 'cropimgs/potato.webp',
                'climate': 'Temperate climate',
                'soil': 'Well-drained soil',
                'fertilizers': '',
                'production' : '',
            },
            'onion': {
                'image': 'cropimgs/onion.webp',
                'climate': 'Temperate climate',
                'soil': 'Well-drained soil',
                'fertilizers': '',
            },
            'mango': {
                'image': 'cropimgs/mango.webp',
                'climate': 'Temperate climate',
                'soil': 'Well-drained soil',
                'fertilizers': '',
                'production' : '',
            },
            'banana': {
                'image': 'cropimgs/banana.webp',
                'climate': 'Temperate climate',
                'soil': 'Well-drained soil',
                'fertilizers': '',
                'production' : '',
            },
            'chickoo': {
                'image': 'cropimgs/chickoo.webp',
                'climate': 'Temperate climate',
                'soil': 'Well-drained soil',
                'fertilizers': '',
                'production' : '',
            },
            'grapes': {
                'image': 'cropimgs/grapes.webp',
                'climate': 'Temperate climate',
                'soil': 'Well-drained soil',
                'fertilizers': '',
                'production' : '',
            },
            'orange': {
                'image': 'cropimgs/orange.webp',
                'climate': 'Temperate climate',
                'soil': 'Well-drained soil',
                'fertilizers': '',
                'production' : '',
            },
            // Add more crop data as needed
        };

        const cropInfo = cropData[cropName];
        if (cropInfo) {
            // const cropInfoTable = document.createElement('div');
            infocrop.innerHTML = `
                
                    <div class="img-crop">
                        <img src="${cropInfo.image}" alt="${cropName}">
                        <h2 class="crop-name">${cropName}</h2>
                    </div>
                    <div class="data">
                        
                            <div class="info">
                                <h3>Climate</h3>
                                <p>${cropInfo.climate}</p>
                            </div>
                            
                            <div class="info">
                                <h3>Soil</h3>
                                <p>${cropInfo.soil}</p>
                            </div>

                            <div class="info">
                                <h3>Production Practices</h3>
                                <p>${cropInfo.production}</p>
                            </div>

                            <div class="info">
                                <h3>Fertilizers</h3>
                                <p>${cropInfo.fertilizers}</p>
                            </div>
                        
                    </div>
                
            `;
        }
        else {
            document.getElementById('crop-info').textContent = 'Crop information not available.';
        }
    } else {
        document.getElementById('crop-info').textContent = 'No crop selected.';
    }
});

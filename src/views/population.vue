<template >
  <div id="population" class="page-body">
    <div class="container">
      <p>Use the small buttons to generate random values within a range, depending on related factors (ie climate, diet, etc). Land area is in square miles. If you need names for the country, its cities, and locations, try the Vocabulary Generator. See notes below for real-world comparisons on countries, climates, and cities.</p>
      <p>Today, the average crop yield is around 30:1; pre-modern crop yields were closer to 2:1. The generator calculates based on modern acreage-to-feed rates and adjusts downwards. Tweaking the country's climate will also affect the crop yield. Unless, of course, merchants/imports provide most or all food, in which case population can be nearly independent of local resources. This generator only estimates for farming cultures. For nomads, you'll need a lot of land per person. If there's not as much land, what there is must be resource-rich (eg early Japan). If you want to estimate a nomadic country, try Mongolia. It has a modern density of 5; estimates put its density at .2 in Chinggis Khan's era: that's 1 person for every 5 square miles. Of course, 120K people is still a lot if you can get them all in one place.</p>
      <div class="row">
        <div class="seven columns">

          <form>
            <div class="row">
              <div class="four columns">
                <label for="arable">Total sq miles</label>
                <div class="randomwrap">
                  <input type="number" min="100" name="land" v-model="land" class="u-full-width">
                  <button type="button" class="button site-btn-sec withrandom" v-on:click="randomLand">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><g id="random"><path d="M0.715,6.526h2.982L5.446,8.65l2.021-2.455L4.881,3.054H0.715C0.322,3.054,0,3.444,0,3.922v1.736C0,6.136,0.322,6.526,0.715,6.526z"/><path d="M15.727,6.526v2.605c0,0.478,0.227,0.593,0.506,0.253l3.56-3.981c0.277-0.337,0.277-0.891,0-1.228l-3.56-3.982c-0.279-0.337-0.506-0.223-0.506,0.256v2.604h-3.451L3.697,13.473H0.715C0.322,13.473,0,13.863,0,14.341v1.737c0,0.478,0.322,0.868,0.715,0.868h4.166l8.578-10.42H15.727z"/><path d="M16.232,10.614c-0.279-0.338-0.506-0.224-0.506,0.254v2.604h-2.268l-1.748-2.124l-2.022,2.456l2.586,3.142h3.451v2.604c0,0.478,0.227,0.593,0.506,0.254l3.56-3.981c0.277-0.338,0.277-0.892,0-1.229L16.232,10.614z"/></g></svg>
                  </button>
                </div>
              </div>
              <div class="eight columns">
                <p class="sidenotepara">See notes for comparable countries by square miles.</p>
              </div>
            </div>
            <div class="row">
              <div class="three columns">
                <label for="settled">Country's age:</label>
                <div class="randomwrap">
                  <input type="number" name="settled" v-model="settled" class="u-full-width">
                  <button type="button" class="button site-btn-sec withrandom" v-on:click="randomAge">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><g id="random"><path d="M0.715,6.526h2.982L5.446,8.65l2.021-2.455L4.881,3.054H0.715C0.322,3.054,0,3.444,0,3.922v1.736C0,6.136,0.322,6.526,0.715,6.526z"/><path d="M15.727,6.526v2.605c0,0.478,0.227,0.593,0.506,0.253l3.56-3.981c0.277-0.337,0.277-0.891,0-1.228l-3.56-3.982c-0.279-0.337-0.506-0.223-0.506,0.256v2.604h-3.451L3.697,13.473H0.715C0.322,13.473,0,13.863,0,14.341v1.737c0,0.478,0.322,0.868,0.715,0.868h4.166l8.578-10.42H15.727z"/><path d="M16.232,10.614c-0.279-0.338-0.506-0.224-0.506,0.254v2.604h-2.268l-1.748-2.124l-2.022,2.456l2.586,3.142h3.451v2.604c0,0.478,0.227,0.593,0.506,0.254l3.56-3.981c0.277-0.338,0.277-0.892,0-1.229L16.232,10.614z"/></g></svg>
                  </button>
                </div>
              </div>
              <div class="six columns">
                <label for="climateList">Overall climate:</label>
                <select name="settlementList" v-model="climateObj" v-on:change="changeClimate" class="u-full-width">
                  <option disabled value="">Please select one</option>
                  <option v-for="(climate, index) in climates" v-bind:key="index" v-bind:value="climate">
                    {{ climate.descrip }}
                  </option>
                </select>
              </div>
              <div class="three columns">
                <label for="arable">Arable land:</label>
                <div class="randomwrap">
                  <input type="number" min="0" max="100" name="arable" v-model="arable"  class="u-full-width percent" >
                  <button type="button" class="button site-btn-sec withrandom" v-on:click="changeClimate">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><g id="random"><path d="M0.715,6.526h2.982L5.446,8.65l2.021-2.455L4.881,3.054H0.715C0.322,3.054,0,3.444,0,3.922v1.736C0,6.136,0.322,6.526,0.715,6.526z"/><path d="M15.727,6.526v2.605c0,0.478,0.227,0.593,0.506,0.253l3.56-3.981c0.277-0.337,0.277-0.891,0-1.228l-3.56-3.982c-0.279-0.337-0.506-0.223-0.506,0.256v2.604h-3.451L3.697,13.473H0.715C0.322,13.473,0,13.863,0,14.341v1.737c0,0.478,0.322,0.868,0.715,0.868h4.166l8.578-10.42H15.727z"/><path d="M16.232,10.614c-0.279-0.338-0.506-0.224-0.506,0.254v2.604h-2.268l-1.748-2.124l-2.022,2.456l2.586,3.142h3.451v2.604c0,0.478,0.227,0.593,0.506,0.254l3.56-3.981c0.277-0.338,0.277-0.892,0-1.229L16.232,10.614z"/></g></svg>
                  </button>
                </div>
              </div>
            </div>

            <div class="row">
              <p>In the past decade, what percentage of the population has died or fled due to:</p>
              <div class="row">
                <div class="three columns">
                  <label for="famine">famine or drought</label>
                  <div class="randomwrap">
                    <input type="number" min="0" max="20" name="famine" v-model="famine" class="u-full-width percent">
                    <button type="button" class="button site-btn-sec withrandom"  v-on:click="randomFamine">
                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><g id="random"><path d="M0.715,6.526h2.982L5.446,8.65l2.021-2.455L4.881,3.054H0.715C0.322,3.054,0,3.444,0,3.922v1.736C0,6.136,0.322,6.526,0.715,6.526z"/><path d="M15.727,6.526v2.605c0,0.478,0.227,0.593,0.506,0.253l3.56-3.981c0.277-0.337,0.277-0.891,0-1.228l-3.56-3.982c-0.279-0.337-0.506-0.223-0.506,0.256v2.604h-3.451L3.697,13.473H0.715C0.322,13.473,0,13.863,0,14.341v1.737c0,0.478,0.322,0.868,0.715,0.868h4.166l8.578-10.42H15.727z"/><path d="M16.232,10.614c-0.279-0.338-0.506-0.224-0.506,0.254v2.604h-2.268l-1.748-2.124l-2.022,2.456l2.586,3.142h3.451v2.604c0,0.478,0.227,0.593,0.506,0.254l3.56-3.981c0.277-0.338,0.277-0.892,0-1.229L16.232,10.614z"/></g></svg>
                    </button>
                  </div>
                </div>
                <div class="three columns">
                  <label for="plague">contagious plague</label>
                  <div class="randomwrap">
                    <input type="number" min="0" max="20" name="plague" v-model="plague" class="u-full-width percent">
                    <button type="button" class="button site-btn-sec withrandom" v-on:click="randomPlague">
                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><g id="random"><path d="M0.715,6.526h2.982L5.446,8.65l2.021-2.455L4.881,3.054H0.715C0.322,3.054,0,3.444,0,3.922v1.736C0,6.136,0.322,6.526,0.715,6.526z"/><path d="M15.727,6.526v2.605c0,0.478,0.227,0.593,0.506,0.253l3.56-3.981c0.277-0.337,0.277-0.891,0-1.228l-3.56-3.982c-0.279-0.337-0.506-0.223-0.506,0.256v2.604h-3.451L3.697,13.473H0.715C0.322,13.473,0,13.863,0,14.341v1.737c0,0.478,0.322,0.868,0.715,0.868h4.166l8.578-10.42H15.727z"/><path d="M16.232,10.614c-0.279-0.338-0.506-0.224-0.506,0.254v2.604h-2.268l-1.748-2.124l-2.022,2.456l2.586,3.142h3.451v2.604c0,0.478,0.227,0.593,0.506,0.254l3.56-3.981c0.277-0.338,0.277-0.892,0-1.229L16.232,10.614z"/></g></svg>
                    </button>
                  </div>
                </div>
                <div class="three columns">
                  <label for="exwar">external warfare</label>
                  <div class="randomwrap">
                    <input type="number" min="0" max="20" name="exwar" v-model="exwar" class="u-full-width percent">
                    <button type="button" class="button site-btn-sec withrandom" v-on:click="randomExwar">
                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><g id="random"><path d="M0.715,6.526h2.982L5.446,8.65l2.021-2.455L4.881,3.054H0.715C0.322,3.054,0,3.444,0,3.922v1.736C0,6.136,0.322,6.526,0.715,6.526z"/><path d="M15.727,6.526v2.605c0,0.478,0.227,0.593,0.506,0.253l3.56-3.981c0.277-0.337,0.277-0.891,0-1.228l-3.56-3.982c-0.279-0.337-0.506-0.223-0.506,0.256v2.604h-3.451L3.697,13.473H0.715C0.322,13.473,0,13.863,0,14.341v1.737c0,0.478,0.322,0.868,0.715,0.868h4.166l8.578-10.42H15.727z"/><path d="M16.232,10.614c-0.279-0.338-0.506-0.224-0.506,0.254v2.604h-2.268l-1.748-2.124l-2.022,2.456l2.586,3.142h3.451v2.604c0,0.478,0.227,0.593,0.506,0.254l3.56-3.981c0.277-0.338,0.277-0.892,0-1.229L16.232,10.614z"/></g></svg>
                    </button>
                  </div>
                </div>
                <div class="three columns">
                  <label for="inwar">internal strife</label>
                  <div class="randomwrap">
                    <input type="number" min="0" max="20" name="inwar" v-model="inwar" class="u-full-width percent">
                    <button type="button" class="button site-btn-sec withrandom" v-on:click="randomInwar">
                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><g id="random"><path d="M0.715,6.526h2.982L5.446,8.65l2.021-2.455L4.881,3.054H0.715C0.322,3.054,0,3.444,0,3.922v1.736C0,6.136,0.322,6.526,0.715,6.526z"/><path d="M15.727,6.526v2.605c0,0.478,0.227,0.593,0.506,0.253l3.56-3.981c0.277-0.337,0.277-0.891,0-1.228l-3.56-3.982c-0.279-0.337-0.506-0.223-0.506,0.256v2.604h-3.451L3.697,13.473H0.715C0.322,13.473,0,13.863,0,14.341v1.737c0,0.478,0.322,0.868,0.715,0.868h4.166l8.578-10.42H15.727z"/><path d="M16.232,10.614c-0.279-0.338-0.506-0.224-0.506,0.254v2.604h-2.268l-1.748-2.124l-2.022,2.456l2.586,3.142h3.451v2.604c0,0.478,0.227,0.593,0.506,0.254l3.56-3.981c0.277-0.338,0.277-0.892,0-1.229L16.232,10.614z"/></g></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="four columns">
                <label for="grain">Common staple crops are vegetables and:</label>
                <select name="grain" v-model="grain" class="u-full-width">
                  <option disabled value="">Please select one</option>
                  <option value="1">wheat</option>
                  <option value=".75">flax, buckwheat </option>
                  <option value=".5">rice</option>
                </select>
              </div>
              <div class="four columns">
                <label for="meat">Farm-raised/domestic meats are eaten:</label>
                <select name="meat" v-model="meat" class="u-full-width">
                  <option disabled value="">Please select one</option>
                  <option value=".1">1-3 times a year</option>
                  <option value=".3">1-3 times a month</option>
                  <option value=".45">1-3 times a week</option>
                  <option value=".6">every meal</option>
                </select>
              </div>
              <div class="four columns">
                <label for="other">Fish/wild game/foraged foods are eaten:</label>
                <select name="other" v-model="other" class="u-full-width">
                  <option disabled value="">Please select one</option>
                  <option value=".9">a few times a year</option>
                  <option value=".85">1-3 times a month</option>
                  <option value=".80">1-3 times a week</option>
                  <option value=".75">every meal</option>
                </select>
              </div>
            </div>
            <div class="row padtop">
              <div class="four columns">
                <label for="settlementList">Setlements are:</label>
              </div>
              <div class="eight columns">
                <select name="settlementList" v-model="settlementObj" class="u-full-width">
                  <option disabled value="">Please select one</option>
                  <option v-for="(settlement, index) in settlements" v-bind:key="index" v-bind:value="settlement">
                    {{ settlement.name }}
                  </option>
                </select>
              </div>
            </div>

            <div class="row">
              <div class="four columns">
                <label for="literacyList">Education/literacy is:</label>
              </div>
              <div class="eight columns">
                <select name="literacyList" v-model="literacyObj" class="u-full-width">
                  <option disabled value="">Please select one</option>
                  <option v-for="(literate, index) in literacy" v-bind:key="index" v-bind:value="literate">
                    {{ literate.name }}
                  </option>
                 </select>
              </div>
            </div>

            <div class="row">
              <div class="four columns">
                <label for="economyList">The economy is:</label>
              </div>
              <div class="eight columns">
                <select name="economyList" v-model="economyObj" class="u-full-width">
                  <option disabled value="">Please select one</option>
                  <option v-for="(econ, index) in economyList" v-bind:key="index" v-bind:value="econ">
                    {{ econ.name }}
                  </option>
                 </select>
              </div>
            </div>

            <div class="row padtop">
              <div class="four columns">
                <input type="text" v-model="name" value="" placeholder="country name" class="u-full-width" />
              </div>
              <div class="two columns">
                <button class="button" type="button" v-on:click="getAll()">generate</button>
              </div>
            </div>

          </form>
        </div>
        <div class="five columns">
          <h5 class="bordered short">Results</h5>
          <table class="u-full-width">
            <thead>
              <th>statistic</th>
              <th>value</th>
              <th>formula</th>
            </thead>
            <tbody>
              <tr>
                <td>total area</td>
                <td>{{allsetObj.land}}</td>
                <td>total square miles</td>
              </tr>
              <tr>
                <td>farmland</td>
                <td>{{allsetObj.farmland}}</td>
                <td>cultivated + arable, sq. miles</td>
              </tr>
              <tr>
                <td>density per mile</td>
                <td>{{allsetObj.density}}</td>
                <td>population &divide; total land</td>
              </tr>
              <tr>
                <td>population</td>
                <td>
                  {{allsetObj.actualPop}}<br/>
                  {{allsetObj.urbanPop}}<br/>
                  {{allsetObj.ruralPop}}<br/>
                  {{allsetObj.itenPop}}
                </td>
                <td>
                  population - (climate + strife)<br/>
                  # residing in cities and towns<br />
                  # residing in settlements &lt; 20 people<br/>
                  # itinerant, isolated, or outcast
                </td>
              </tr>
              <tr>
                <td>greater urban</td>
                <td>
                  {{allsetObj.capital}}<br/>
                  <span v-for="(u, index) in allsetObj.unit" v-bind:key="index" v-if="u.type === 'tradeCenter'">
                    <span>{{u.size}}<br/></span>
                  </span>
                </td>
                <td>
                  capital<br/>
                  trade center(s)<br/>
                </td>
              </tr>
              <tr>
                <td>lesser urban</td>
                <td>
                  <span v-show="allsetObj.tradeCenter > 0">{{allsetObj.tradeCenter}}<br/></span>
                  <span v-show="allsetObj.bigCityLarge > 0">{{allsetObj.bigCityLarge }}<br/></span>
                  <span v-show="allsetObj.bigCityMed > 0">{{allsetObj.bigCityMed }}<br/></span>
                  <span v-show="allsetObj.bigCitySmall > 0">{{allsetObj.bigCitySmall }}<br/></span>
                  <span v-show="allsetObj.cityLarge > 0">{{allsetObj.cityLarge }}<br/></span>
                  <span v-show="allsetObj.cityMed > 0">{{allsetObj.cityMed }}<br/></span>
                  <span v-show="allsetObj.citySmall > 0">{{allsetObj.citySmall }}<br/></span>
                  {{allsetObj.towns }}<br/>
                  {{allsetObj.villages }}
                </td>
                <td>
                  <span v-show="allsetObj.bigCityLarge > 0">big city, 80K-100K<br/></span>
                  <span v-show="allsetObj.bigCityMed > 0">big city, 60K-80K <br/></span>
                  <span v-show="allsetObj.bigCitySmall > 0"> big city, 40K - 60K<br/></span>
                  <span v-show="allsetObj.cityLarge > 0">city, 20K-40K<br/></span>
                  <span v-show="allsetObj.cityMed > 0"> city, 10K-20K <br/></span>
                  <span v-show="allsetObj.citySmall > 0"> city, 5K - 10K<br/></span>
                  towns: 1K-5K<br/>
                  villages: under 1K
                </td>
              </tr>
              <tr>
                <td>universities</td>
                <td>{{allsetObj.school}}</td>
                <td><span v-for="(u, index) in allsetObj.university" v-bind:key="index">{{u.descrip}}<br/></span></td>
              </tr>
              <tr>
                <td>literacy rate</td>
                <td>{{allsetObj.literacyRate}}%</td>
                <td>overall</td>
              </tr>
              <tr>
                <td>border/isolated forts</td>
                <td>
                  {{allsetObj.castleActiveWild}}<br/>
                  {{allsetObj.castleRuinWild}}
                </td>
                <td>
                  # currently in use<br/>
                  # abandoned/destroyed
                </td>
              </tr>
              <tr>
                <td>central/urban forts</td>
                <td>
                  {{allsetObj.castleActiveUrban}}<br/>
                  {{allsetObj.castleRuinUrban}}
                </td>
                <td>
                  # currently in use<br/>
                  # abandoned/destroyed
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    {{allsetObj}}
  </div>
</template>

<script>
export default {
  name: 'population',
  data: () => ({
    name: null,
    acreToEat: 0,
    actualPop: 0,
    ageBase: 0,
    arable: 0,
    bigCityLarge: 0,
    bigCityMed: 0,
    bigCitySmall: 0,
    capital: 0,
    castleActiveUrban: 0,
    castleActiveWild: 0,
    castleRuinUrban: 0,
    castleRuinWild: 0,
    cityRoll: 0,
    cityLarge: 0,
    cityMed: 0,
    citySmall: 0,
    climateLimit: 0,
    climateObj: {},
    density: 0,
    economyObj: {},
    exwar: 0,
    famine: 0,
    farmland: 0,
    grain: 0,
    inwar: 0,
    itenPop: 0,
    land: 150000,
    limit: 0,
    literacyObj: {},
    literacyRate: 0,
    meat: 0,
    other: 0,
    plague: 0,
    population: {},
    ruralPop: 0,
    school: 0,
    settled: 200,
    settlementObj: {},
    strife: 0,
    towns: 0,
    university: [
      {
        school: 0,
        description: null
      }
    ],
    urbanPop: 0,
    unit: [],
    villages: 0,
    xland: 0,
    allsetObj: {},
    climates: [
      {
        id: 1,
        descrip: 'Rainforest: humid & wet year-round',
        amount: 15,
        adjust: 3.5
      },
      {
        id: 2,
        descrip: 'Savanna: short dry mild winter, hot wet summer',
        amount: 50,
        adjust: 2
      },
      {
        id: 3,
        descrip: 'Desert: hot & dry year-round',
        amount: 5,
        adjust: 5
      },
      {
        id: 4,
        descrip: 'Steppe: long cold winter, warm summer, little rain',
        amount: 10,
        adjust: 4
      },
      {
        id: 5,
        descrip: 'Chapparal: wet mild winter, very dry summer',
        amount: 25,
        adjust: 3
      },
      {
        id: 6,
        descrip: 'Grasslands: cold winter, hot summer, some rain',
        amount: 30,
        adjust: 2.5
      },
      {
        id: 7,
        descrip: 'Deciduous: cold winter, hot summer, plenty of rain',
        amount: 60,
        adjust: 1.5
      },
      {
        id: 8,
        descrip: 'Taiga: long cold winter, short cool summer, humid',
        amount: 15,
        adjust: 3.5
      },
      {
        id: 9,
        descrip: 'Tundra: long cold winter, short cool summer, dry',
        amount: 5,
        adjust: 5
      }
    ],
    economyList: [
      {
        type: 1,
        name: 'medieval, agrarian',
        reduce: 2,
        urbanHigh: 5,
        urbanLow: 1,
        itenHigh: 5,
        itenLow: 1,
        rollHigh: 80,
        rollLow: 20
      },
      {
        type: 2,
        name: 'agrarian-mercantile transition',
        reduce: 13,
        urbanHigh: 15,
        urbanLow: 5,
        itenHigh: 7,
        itenLow: 2,
        rollHigh: 90,
        rollLow: 60
      },
      {
        type: 3,
        name: 'renaissance, mercantile',
        reduce: 25,
        urbanHigh: 20,
        urbanLow: 15,
        itenHigh: 10,
        itenLow: 3,
        rollHigh: 99,
        rollLow: 80
      }
    ],
    settlements: [
      {
        type: 1,
        name: 'compressed/frontier, walled',
        villageLow: 30,
        villageHigh: 50,
        townLow: 35,
        townHigh: 60,
        cityLow: 50,
        cityHigh: 80,
        metroLow: 70,
        metroHigh: 90,
        villageBldgLow: 25,
        villageBldgHigh: 35,
        townBldgLow: 40,
        townBldgHigh: 60,
        cityBldgLow: 65,
        cityBldgHigh: 90,
        metroBldgLow: 100,
        metroBldgHigh: 140
      },
      {
        type: 2,
        name: 'distributed, ie town expanded beyond walls',
        villageLow: 20,
        villageHigh: 35,
        townLow: 25,
        townHigh: 45,
        cityLow: 30,
        cityHigh: 55,
        metroLow: 45,
        metroHigh: 70,
        villageBldgLow: 15,
        villageBldgHigh: 25,
        townBldgLow: 30,
        townBldgHigh: 45,
        cityBldgLow: 50,
        cityBldgHigh: 70,
        metroBldgLow: 80,
        metroBldgHigh: 100
      },
      {
        type: 3,
        name: 'established/planned OR unwalled',
        villageLow: 10,
        villageHigh: 20,
        townLow: 15,
        townHigh: 30,
        cityLow: 20,
        cityHigh: 40,
        metroLow: 20,
        metroHigh: 50,
        villageBldgLow: 10,
        villageBldgHigh: 20,
        townBldgLow: 20,
        townBldgHigh: 30,
        cityBldgLow: 30,
        cityBldgHigh: 50,
        metroBldgLow: 40,
        metroBldgHigh: 70
      }
    ],
    literacy: [
      {
        id: 1,
        name: 'rare: clergy & uppermost elites only',
        valueHigh: 5,
        valueLow: 1
      },
      {
        id: 2,
        name: 'limited: clergy, all elites',
        valueHigh: 10,
        valueLow: 5
      },
      {
        id: 3,
        name: 'moderate: clergy, elites, tradespeople',
        valueHigh: 35,
        valueLow: 10
      },
      {
        id: 4,
        name: 'widespread: majority can read, many can write',
        valueHigh: 75,
        valueLow: 35
      },
      {
        id: 5,
        name: 'near-universal: everyone can read AND write',
        valueHigh: 99,
        valueLow: 75
      }
    ]
  }),
  methods: {
    getAll: function() {
      this.calculateThis();
      this.allsetObj = {
        name: this.name,
        land: this.addCommas(this.land),
        farmland: this.addCommas(this.farmland),
        density: this.addCommas(this.density),
        actualPop: this.addCommas(this.actualPop),
        urbanPop: this.addCommas(this.urbanPop),
        ruralPop: this.addCommas(this.ruralPop),
        itenPop: this.addCommas(this.itenPop),
        capital: this.addCommas(this.capital),
        tradeCenter: this.addCommas(this.tradeCenter),
        bigCityLarge: this.addCommas(this.bigCityLarge),
        bigCityMed: this.addCommas(this.bigCityMed),
        bigCitySmall: this.addCommas(this.bigCitySmall),
        cityLarge: this.addCommas(this.cityLarge),
        cityMed: this.addCommas(this.cityMed),
        citySmall: this.addCommas(this.citySmall),
        towns: this.addCommas(this.towns),
        villages: this.addCommas(this.villages),
        school: this.addCommas(this.school),
        university: this.university,
        literacyRate: this.literacyRate,
        castleActiveWild: this.addCommas(this.castleActiveWild),
        castleRuinWild: this.addCommas(this.castleRuinWild),
        castleActiveUrban: this.addCommas(this.castleActiveUrban),
        castleRuinUrban: this.addCommas(this.castleRuinUrban),
        unit: this.unit
      };
    },
    calculateThis: function() {
      this.farmland = Math.round(this.land * (this.arable / 100));
      var sqAcres = Math.round(this.farmland * 640);
      var grain = parseFloat(this.grain);
      var meat = parseFloat(this.meat);
      var other = parseFloat(this.other);
      this.acreToEat = ((grain + meat) * other) * 2;
      var maxPop = Math.floor(sqAcres / this.acreToEat);
      var potPop = Math.round(maxPop - (maxPop * (this.climateLimit / 10)));
      this.strife = this.famine + this.plague + this.exwar + this.inwar;
      this.strife > 0 ? this.actualPop = Math.round(potPop - (potPop * (this.strife / 100))) : this.actualPop = potPop;
      this.density = Math.floor(this.actualPop / this.land);

      var smallRoll = 1;
      var t = this.economyObj.reduce;
      for (var i = 0; i < 2; i++) {
        smallRoll += this.randFloor(4, 1);
      }
      smallRoll += t;
      var capitalBase = Math.floor(Math.sqrt(this.actualPop));
      this.capital = (capitalBase * smallRoll);

      this.urban = this.randFloor(this.economyObj.urbanHigh, this.economyObj.urbanLow);
      this.iten = this.randFloor(this.economyObj.itenHigh, this.economyObj.itenLow);
      this.rural = (100 - this.urban - this.iten);
      this.urbanPop = Math.round(this.actualPop * (this.urban * 0.01));
      this.itenPop = Math.round(this.actualPop * (this.iten * 0.01));
      this.ruralPop = (this.actualPop - this.itenPop - this.urbanPop);

      this.settlementObjV = this.randRound(this.settlementObj.villageHigh, this.settlementObj.villageLow);
      this.settlementObjT = this.randRound(this.settlementObj.townHigh, this.settlementObj.townLow);
      this.settlementObjC = this.randRound(this.settlementObj.cityHigh, this.settlementObj.cityLow);
      this.settlementObjM = this.randRound(this.settlementObj.metroHigh, this.settlementObj.metroLow);

      this.literacyRate = this.randRound(this.literacyObj.valueHigh, this.literacyObj.valueLow);
      if (this.literacyRate > 70) {
        this.school = Math.round(this.actualPop / 12000000);
      } else if (this.literacyRate < 20) {
        this.school = Math.round(this.actualPop / 27000000);
      } else {
        this.school = Math.round(this.actualPop / 18000000);
      }
      this.university = {};
      for (i = 0; i < this.school; i++) {
        var schoolRoll = this.randFloor(12, 1);
        this.university[i] = {};
        if (schoolRoll < 9) {
          this.university[i].descrip = 'Bachelors: liberal arts';
        } else if (schoolRoll === 12) {
          this.university[i].descrip = 'Masters: law, medicine, theology';
        } else {
          this.university[i].descrip = 'Doctorate: specialized studies';
        }
      }

      this.getCityPops();

      var ageBase = Math.round(Math.sqrt(this.settled));
      var popBase = Math.round(potPop / 5000000);
      var castleRuinBase = (ageBase * popBase);
      var castleActiveBase = Math.round(this.actualPop / 50000);
      var castleRuin = this.decreasePer(castleRuinBase, this.inwar, this.exwar);
      var castleActive = this.increasePer(castleActiveBase, this.inwar, this.exwar);

      var castleSplit = this.randRound(80, 70); //  % urban
      var castleA = castleSplit + this.inwar - this.exwar;
      this.castleActiveUrban = Math.round(castleActive * (castleA / 100));
      this.castleActiveWild = castleActive - this.castleActiveUrban;

      var castleB = castleSplit - this.inwar + this.exwar;
      this.castleRuinUrban = Math.round(castleRuin * (castleB / 100));
      this.castleRuinWild = castleRuin - this.castleRuinUrban;
    },
    changeClimate: function() {
      this.climateLimit = this.climateObj.adjust;
      this.arable = this.randFloor(this.climateObj.amount, 1);
    },
    getCityPops: function() {
      var cityRollA = this.randFloor(this.economyObj.rollHigh, this.economyObj.rollLow);
      var size = Math.floor(this.capital * (cityRollA / 100));
      var compareCity = size;
      this.urbanTotal = size;
      var cityRollB = 0;
      var i = 0;
      var place1 = this.shuffle(name1);
      var place2 = this.shuffle(name2);
      while (size > 999) {
        if (this.economyObj.type < 2) {
          cityRollB = this.randFloor(80, 60);
        } else if (this.economyObj.type > 2) {
          cityRollB = this.randFloor(99, 89);
        } else {
          cityRollB = this.randFloor(90, 75);
        }
        size = Math.floor(compareCity * (cityRollB / 100));
        compareCity = size;
        if (size > 100000) {
          this.unit[i] = {};
          this.unit[i].size = size;
          this.unit[i].type = 'tradeCenter';
          i < 12 ? this.unit[i].name = place1[i] + ' ' + place2[i] : this.unit[i].name = '';
          this.tradeCenter += 1;
          this.urbanTotal += size;
        } else if (size > 80000) {
          this.unit[i] = {};
          this.unit[i].size = size;
          i < 12 ? this.unit[i].name = place1[i] + ' ' + place2[i] : this.unit[i].name = '';
          this.unit[i].type = 'bigCityLarge';
          this.bigCityLarge += 1;
          this.urbanTotal += size;
        } else if (size > 60000) {
          this.unit[i] = {};
          this.unit[i].size = size;
          i < 12 ? this.unit[i].name = place1[i] + ' ' + place2[i] : this.unit[i].name = '';
          this.unit[i].type = 'bigCityMed';
          this.bigCityMed += 1;
          this.urbanTotal += size;
        } else if (size > 40000) {
          this.unit[i] = {};
          this.unit[i].size = size;
          i < 12 ? this.unit[i].name = place1[i] + ' ' + place2[i] : this.unit[i].name = '';
          this.unit[i].type = 'bigCitySmall';
          this.bigCitySmall += 1;
          this.urbanTotal += size;
        } else if (size > 20000) {
          this.unit[i] = {};
          this.unit[i].size = size;
          i < 12 ? this.unit[i].name = place1[i] + ' ' + place2[i] : this.unit[i].name = '';
          this.unit[i].type = 'cityLarge';
          this.cityLarge += 1;
          this.urbanTotal += size;
        } else if (size > 10000) {
          this.unit[i] = {};
          this.unit[i].size = size;
          i < 12 ? this.unit[i].name = place1[i] + ' ' + place2[i] : this.unit[i].name = '';
          this.unit[i].type = 'cityMed';
          this.cityMed += 1;
          this.urbanTotal += size;
        } else if (size > 5000) {
          this.unit[i] = {};
          this.unit[i].size = size;
          i < 12 ? this.unit[i].name = place1[i] + ' ' + place2[i] : this.unit[i].name = '';
          this.unit[i].type = 'citySmall';
          this.citySmall += 1;
          this.urbanTotal += size;
        } else if (size > 1000) {
          this.unit[i] = {};
          this.unit[i].size = size;
          i < 12 ? this.unit[i].name = place1[i] + ' ' + place2[i] : this.unit[i].name = '';
          this.unit[i].type = 'town';
          this.towns += 1;
          this.urbanTotal += size;
        } else {
          console.log(this.urbanTotal, size);
          var remainder = this.urbanPop - this.urbanTotal;
          this.villages = Math.round(remainder / 400);
          break;
        }
        i++;
      }
    },
    shuffle: function(o) {
      for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
    },
    addCommas: function(intNum) {
      return (intNum + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    },
    randomFamine: function() {
      this.famine = this.randFloor(20, 0);
    },
    randomPlague: function() {
      this.plague = this.randFloor(20, 0);
    },
    randomExwar: function() {
      this.exwar = this.randFloor(20, 0);
    },
    randomInwar: function() {
      this.inwar = this.randFloor(20, 0);
    },
    randomLand: function() {
      this.land = this.randFloor(200000, 500);
    },
    randomAge: function() {
      this.settled = this.randFloor(500, 10);
    },
    randRound: function(x, y) {
      return Math.round(Math.random() * (x - y) + y);
    },
    randFloor: function(x, y) {
      return Math.floor(Math.random() * (x - y) + y);
    },
    increasePer: function(x, y, z) {
      return Math.round(x + (x * ((y + z) / 100)));
    },
    decreasePer: function(x, y, z) {
      return Math.round(x - (x * ((y + z) / 100)));
    }
  }
};
var name1 = [
  'all',
  'arriving',
  'autumn',
  'baker’s',
  'bald',
  'banner',
  'bare',
  'barley',
  'baron’s',
  'battle',
  'beautiful',
  'beech',
  'big',
  'bitter',
  'black',
  'blown',
  'blue',
  'boar’s',
  'boatsman’s',
  'boiling',
  'borrowing',
  'bright',
  'broad',
  'broken',
  'broom',
  'brown',
  'burned',
  'burning',
  'camp',
  'carrying',
  'central',
  'chief',
  'clay',
  'clear',
  'coiled',
  'concealed',
  'conqueror’s',
  'copper',
  'crane’s',
  'crooked',
  'crowned',
  'crow’s',
  'seven',
  'current',
  'dark',
  'deep',
  'departing',
  'devil’s',
  'doctor’s',
  'down',
  'dread',
  'dry',
  'duchess’',
  'duke’s',
  'east',
  'fair winds',
  'falcon’s',
  'fallen',
  'falling',
  'false',
  'farmer’s',
  'fast',
  'fat',
  'father’s',
  'fawn',
  'fearsome',
  'fine',
  'fire',
  'fisher’s',
  'five',
  'flat',
  'flooding',
  'foreigner’s',
  'forgotten',
  'fortified',
  'four',
  'fragrant',
  'freewoman’s',
  'friend’s',
  'girl’s',
  'goat’s',
  'goddess',
  'god’s',
  'gold',
  'golden',
  'gracious',
  'grand',
  'great',
  'greater',
  'green',
  'happy',
  'heel',
  'herald’s',
  'hidden',
  'high',
  'hilly',
  'holly',
  'holy',
  'hot',
  'hotwater',
  'hundred',
  'illustrious',
  'king’s',
  'lady’s',
  'large',
  'lazy',
  'leaving',
  'lemon',
  'lesser',
  'light',
  'little',
  'lord’s',
  'lost',
  'loud',
  'low',
  'lucky',
  'many',
  'marvelous',
  'meander',
  'mercy',
  'messenger’s',
  'middle',
  'minor',
  'misty',
  'modest',
  'monk’s',
  'mother’s',
  'mountain’s',
  'muddy',
  'nectar',
  'new',
  'noble',
  'noisy',
  'north',
  'old',
  'outsider’s',
  'over',
  'painted',
  'peaceful',
  'peddler’s',
  'pit',
  'plenty',
  'polite',
  'poor',
  'potseller’s',
  'pretty',
  'queen’s',
  'rainy',
  'red',
  'reed',
  'resting',
  'rich',
  'right',
  'rising',
  'river',
  'rocky',
  'royal',
  'running',
  'safe',
  'saint',
  'salt',
  'sea',
  'seaside',
  'separate',
  'settle',
  'settler’s',
  'sheltered',
  'shining',
  'silver',
  'singing',
  'six',
  'slow',
  'small',
  'smoking',
  'smoky',
  'snowy',
  'solitary',
  'sorrowful',
  'south',
  'splendid',
  'spring',
  'stinking',
  'stone',
  'storm',
  'straits',
  'strife’s',
  'summer',
  'sun',
  'sweet',
  'swift',
  'tall',
  'tan',
  'tattooed',
  'tawny',
  'tears',
  'ten',
  'thief’s',
  'thorny',
  'thousand',
  'three',
  'thunder',
  'tin',
  'true',
  'tumble',
  'twisted',
  'two',
  'under',
  'unfordable',
  'victory',
  'wanderer’s',
  'waterside',
  'watery',
  'wealthy',
  'west',
  'white',
  'wide',
  'wild',
  'winding',
  'windy',
  'winter',
  'wise',
  'wooded',
  'yellow'
]
var name2 = [
  'alder',
  'angle',
  'ark',
  'ashtree',
  'assembly',
  'bank',
  'banner',
  'bargain',
  'bark',
  'bay',
  'beach',
  'bell',
  'belt',
  'board',
  'bones',
  'book',
  'border',
  'boundary',
  'bounds',
  'breach',
  'bridge',
  'brook',
  'bull',
  'camp',
  'castle',
  'cave',
  'cay',
  'cedar',
  'chief',
  'children',
  'chimneys',
  'choir',
  'church',
  'circle',
  'clearing',
  'column',
  'corner',
  'cotton',
  'cove',
  'creek',
  'crescent',
  'crest',
  'crook',
  'cross',
  'cry',
  'corner',
  'cups',
  'current',
  'dam',
  'deer',
  'ditch',
  'down',
  'dwell',
  'edge',
  'end',
  'estuary',
  'falls',
  'farm',
  'fence',
  'field',
  'fight',
  'flowers',
  'folk',
  'ford',
  'forest',
  'fort',
  'fortress',
  'fortune',
  'fountain',
  'furnace',
  'gardens',
  'garrison',
  'gate',
  'grass',
  'ground',
  'grove',
  'harbor',
  'harmony',
  'head',
  'heart',
  'hedge',
  'hill',
  'hillock',
  'hills',
  'holders',
  'honor',
  'hook',
  'house',
  'hunt',
  'huts',
  'island',
  'jar',
  'key',
  'lakes',
  'land',
  'lodge',
  'lodging',
  'mangos',
  'manor',
  'mansion',
  'marble',
  'market',
  'marsh',
  'meadow',
  'mercy',
  'mill',
  'mine',
  'moor',
  'mountain',
  'mouth',
  'mouth',
  'narrows',
  'nest',
  'oaks',
  'oven',
  'palace',
  'paradise',
  'pass',
  'pasture',
  'peaks',
  'pine',
  'pit',
  'place',
  'plains',
  'plot',
  'pocket',
  'point',
  'pond',
  'pool',
  'port',
  'prairie',
  'rampart',
  'ravine',
  'refuge',
  'river',
  'road',
  'rock',
  'rover',
  'run',
  'rushes',
  'saint',
  'sands',
  'saw',
  'school',
  'settle',
  'shed',
  'shipyard',
  'shire',
  'shore',
  'shrine',
  'side',
  'side',
  'slope',
  'spear',
  'spring',
  'stake',
  'step',
  'sticks',
  'stone',
  'straits',
  'stream',
  'summit',
  'swamp',
  'table',
  'temple',
  'thicket',
  'threshold',
  'tower',
  'tree',
  'tribes',
  'university',
  'vale',
  'valley',
  'victory',
  'vineyard',
  'warren',
  'waters',
  'waves',
  'wharf',
  'willow',
  'winch',
  'winds',
  'wisdom',
  'wood',
  'yard',
  'yield'
]
</script>

<style>
.withrandom svg {
    fill: white;
}

.randomwrap {
  position: relative;
}

.withrandom {
  margin-left: -4rem;
  position: absolute;
  top: 0;
  right: 0
}

.sidenotepara {
  margin-top: 2.5rem;
}
</style>

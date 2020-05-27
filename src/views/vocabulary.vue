<template >
  <div v-show="vocabulary" class="page-body">
    <div class="container">
      <div v-show="!generated">
        <p>To create the vocabulary, consider words by their syllables. In a multi-syllabic word, the word will have a
        <strong>FIRST</strong> syllable, a <strong>MIDDLE</strong> syllable (or several middles), and a <strong>LAST</strong> syllable. One-syllable words will use the <strong>FIRST</strong> pattern, two syllable words will
            use the <strong>FIRST</strong> and <strong>LAST</strong> patterns. Words with three or more syllables will use <strong>FIRST</strong> +
            <strong>MIDDLE</strong> + <strong>LAST</strong>, repeating <strong>MIDDLE</strong> as needed.</p>
        <p> To weight a certain letter, add it two or more times, ie: "A,A,A,E,I" or "C,C,C,D,G".
        To have only single letters, leave the DOUBLED fields blank. You can have different letters used for SINGLE or DOUBLED. Example: if 'S' and 'Z' never show up by themselves (as single consonants),
        do not include them in the SINGLE field, and list their paired versions in the DOUBLED field (ie ST, SH, ZR, ZD). </p>
      </div>
      <div v-show="generated">
        <h4>Vocabulary for {{name}}</h4>
      </div>
          <form>
            <div v-show="!generated">
              <div class="row">
                <div class="twelve columns">
                  <div v-if="vocabs" v-for="(vocab, index) in vocabs" v-bind:key="index">
                    <button type="button" class="button site-btn-sec inarow" v-on:click="startOver(vocab)">{{vocab}}</button>
                  </div>
                </div>
              </div>
              <div class="row bordered">
                <div class="four columns">
                  <div class="row">
                    <div class="twelve columns">
                      <p>1. Enter letters separated by commas. For good results: enter minimum 3 vowels & 10 consonants. For better results, add 3 paired consonants & 3 paired vowels.</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="six columns">
                      <label for="v1">List SINGLE vowels.</label>
                      <input type="text" class="u-full-width" v-bind:class="{ entryerr : !v1Val}" name="v1" v-model="v1" v-on:change="v1Func" placeholder="ex: A,E,I, etc">
                    </div>
                    <div class="six columns">
                      <label for="v2">List DOUBLED vowels.</label>
                      <input type="text" class="u-full-width" name="v2" v-bind:class="{ entryerr : !v2Val }" v-model="v2" v-on:change="v2Func" placeholder="ex: AA,EE,IE,OU, etc">
                    </div>
                  </div>
                  <div class="row">
                    <div class="six columns">
                      <label for="c1">List SINGLE consonants.</label>
                      <input type="text" class="u-full-width" name="c1" v-bind:class="{ entryerr : !c1Val }" v-model="c1" placeholder="ex: S,D,F,G, etc" v-on:change="c1Func" />
                    </div>
                    <div class="six columns">
                      <label for="c2">List DOUBLED consonants.</label>
                      <input type="text" class="u-full-width" name="c2" v-bind:class="{ entryerr : !c2Val }" v-model="c2" placeholder="ex: SS,DD,FF,TH,PH,NG, etc" v-on:change="c2Func" />
                    </div>
                  </div>
                </div>
                <div class="four columns" >
                  <div class="row">
                    <div class="six columns">
                      <p>2. What letters can appear at the <strong>start</strong> of a word?</p>
                    </div>
                    <div class="six columns padtop">
                      <select name="firstLetter" v-model="firstLetter" v-on:change="kickStart">
                        <option disabled value="">Please select one</option>
                        <option value="3">any letter</option>
                        <option value="4">specific letters</option>
                        <option value="1">any vowel</option>
                        <option value="2">specific vowels</option>
                        <option value="5">any consonant</option>
                        <option value="6">specific consonants</option>
                      </select>
                    </div>
                  </div>
                  <div class="row">
                    <div class="six columns">
                      <label for="firstLetterV1">SINGLE first-letter vowel(s):</label>
                      <input type="text" class="u-full-width" name="firstLetterV1" v-model="firstLetterV1" :disabled="enabledStart.isEnabledStartVowel" v-on:change="SetLetters">
                    </div>
                    <div class="six columns">
                      <label for="firstLetterV2">DOUBLED first-letter vowel(s):</label>
                      <input type="text" class="u-full-width" name="firstLetterV2" v-model="firstLetterV2" :disabled="enabledStart.isEnabledStartVowel" v-on:change="SetLetters"/>
                    </div>
                  </div>
                  <div class="row">
                    <div class="six columns">
                      <label for="firstLetterC1">SINGLE first-letter consonant(s):</label>
                      <input type="text" class="u-full-width" name="firstLetterC1" v-model="firstLetterC1" :disabled="enabledStart.isEnabledStartCons" v-on:change="SetLetters"/>
                    </div>
                    <div class="six columns">
                      <label for="firstLetterC2">DOUBLED first-letter consonant(s):</label>
                      <input type="text" class="u-full-width" name="firstLetterC2" v-model="firstLetterC2" :disabled="enabledStart.isEnabledStartCons" v-on:change="SetLetters"/>
                    </div>
                  </div>
                </div>
                <div class="four columns">
                  <div class="row">
                    <div class="six columns">
                      <p>What letters can appear at the <strong>end</strong> of a word?</p>
                    </div>
                    <div class="six columns padtop">
                      <select name="lastLetter" v-model="lastLetter" v-on:change="kickStop">
                        <option disabled value="">Please select one</option>
                        <option value="3">any letter</option>
                        <option value="4">specific letters</option>
                        <option value="1">any vowel</option>
                        <option value="2">specific vowels</option>
                        <option value="5">any consonant</option>
                        <option value="6">specific consonants</option>
                      </select>
                    </div>
                  </div>
                  <div class="row">
                    <div class="six columns">
                      <label for="lastLetterV1">SINGLE last-letter vowel(s):</label>
                      <input type="text" class="u-full-width" name="lastLetterV1" v-model="lastLetterV1" :disabled="enabledEnd.isEnabledEndVowel" v-on:change="SetLetters">
                    </div>
                    <div class="six columns">
                      <label for="lastLetterV2">DOUBLED last-letter vowel(s):</label>
                      <input type="text" class="u-full-width" name="lastLetterV2" v-model="lastLetterV2" :disabled="enabledEnd.isEnabledEndVowel" v-on:change="SetLetters" />
                    </div>
                  </div>
                  <div class="row">
                    <div class="six columns">
                      <label for="lastLetterC1">SINGLE last-letter consonant(s):</label>
                      <input type="text" class="u-full-width" name="lastLetterC1" v-model="lastLetterC1" :disabled="enabledEnd.isEnabledEndCons" v-on:change="SetLetters"/>
                    </div>
                    <div class="six columns">
                      <label for="lastLetterC2">DOUBLED last-letter consonant(s):</label>
                      <input type="text" class="u-full-width" name="lastLetterC2" v-model="lastLetterC2" :disabled="enabledEnd.isEnabledEndCons" v-on:change="SetLetters"/>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row bordered">
                <div class="twelve columns">
                  <p>7. Choose your patterns for how syllables are constructed based on where they show up in a word (first, middle, last). You must choose AT LEAST ONE for each or your results will error out. <strong>If there's nothing here, it's because you skipped a step.</strong></p>
                </div>
              </div>
              <div class="row">
                <div class="four columns">
                  <p>How are <strong>FIRST</strong> syllables constructed? </p>
                  <div v-if="(firstLetter < 5) && boolV2 && boolV1"><label class="checkcontainer"><input type="checkbox" v-model="firstsylObj" v-bind:value="12">vowel + multi-vowel<span class="checkmark"></span></label></div>
                  <div v-if="(firstLetter < 5) && boolV1 && boolC1"><label class="checkcontainer"><input type="checkbox" v-model="firstsylObj" v-bind:value="13">vowel + consonant<span class="checkmark"></span></label></div>
                  <div v-if="(firstLetter < 5) && boolV1 && boolC2"><label class="checkcontainer"><input type="checkbox" v-model="firstsylObj" v-bind:value="14">vowel + multi-consonant<span class="checkmark"></span></label></div>
                  <div v-if="(firstLetter < 5) && boolV2 && boolC1"><label class="checkcontainer"><input type="checkbox" v-model="firstsylObj" v-bind:value="23">multi-vowel + consonant<span class="checkmark"></span></label></div>
                  <div v-if="(firstLetter < 5) && boolV2 && boolC2"><label class="checkcontainer"><input type="checkbox" v-model="firstsylObj" v-bind:value="24">multi-vowel + multi-consonant<span class="checkmark"></span></label></div>
                  <div v-if="(firstLetter > 2) && boolV1 && boolC1"><label class="checkcontainer"><input type="checkbox" v-model="firstsylObj" v-bind:value="31">consonant + vowel<span class="checkmark"></span></label></div>
                  <div v-if="(firstLetter > 2) && boolV2 && boolC1"><label class="checkcontainer"><input type="checkbox" v-model="firstsylObj" v-bind:value="32">consonant + multi-vowel<span class="checkmark"></span></label></div>
                  <div v-if="(firstLetter > 2) && boolV1 && boolC2"><label class="checkcontainer"><input type="checkbox" v-model="firstsylObj" v-bind:value="41">multi-consonant + vowel<span class="checkmark"></span></label></div>
                  <div v-if="(firstLetter > 2) && boolV2 && boolC2"><label class="checkcontainer"><input type="checkbox" v-model="firstsylObj" v-bind:value="42">multi-consonant + multi-vowel<span class="checkmark"></span></label></div>
                  <div v-if="(firstLetter > 2) && boolV1 && boolC1"><label class="checkcontainer"><input type="checkbox" v-model="firstsylObj" v-bind:value="313">consonant + vowel + consonant<span class="checkmark"></span></label></div>
                  <div v-if="(firstLetter > 2) && boolV1 && boolC1 && boolC2"><label class="checkcontainer"><input type="checkbox" v-model="firstsylObj" v-bind:value="314">consonant + vowel + multi-consonant<span class="checkmark"></span></label></div>
                  <div v-if="(firstLetter > 2) && boolV2 && boolC1"><label class="checkcontainer"><input type="checkbox" v-model="firstsylObj" v-bind:value="323">consonant + multi-vowel + consonant<span class="checkmark"></span></label></div>
                  <div v-if="(firstLetter > 2) && boolC1 && boolV2 && boolC2"><label class="checkcontainer"><input type="checkbox" v-model="firstsylObj" v-bind:value="324">consonant + multi-vowel + multi-consonant<span class="checkmark"></span></label></div>
                  <div v-if="(firstLetter > 2) && boolC1 && boolV1 && boolC2"><label class="checkcontainer"><input type="checkbox" v-model="firstsylObj" v-bind:value="413">multi-consonant + vowel + consonant<span class="checkmark"></span></label></div>
                  <div v-if="(firstLetter > 2) && boolV1 && boolC2"><label class="checkcontainer"><input type="checkbox" v-model="firstsylObj" v-bind:value="414">multi-consonant + vowel + multi-consonant<span class="checkmark"></span></label></div>
                  <div v-if="(firstLetter > 2) && boolV2 && boolC1 && boolC2"><label class="checkcontainer"><input type="checkbox" v-model="firstsylObj" v-bind:value="423">multi-consonant + multi-vowel + consonant<span class="checkmark"></span></label></div>
                  <div v-if="(firstLetter > 2) && boolV2 && boolC2"><label class="checkcontainer"><input type="checkbox" v-model="firstsylObj" v-bind:value="424">multi-consonant + multi-vowel + multi-consonant<span class="checkmark"></span></label></div>
                </div>
                <div class="four columns">
                  <p>How are <strong>MIDDLE</strong> syllables constructed?</p>
                  <div v-if="boolV2 && boolV1"><label class="checkcontainer"><input type="checkbox" v-model="medsylObj" v-bind:value="12">vowel + multi-vowel<span class="checkmark"></span></label></div>
                  <div v-if="boolV1 && boolC1"><label class="checkcontainer"><input type="checkbox" v-model="medsylObj" v-bind:value="13">vowel + consonant<span class="checkmark"></span></label></div>
                  <div v-if="boolV1 && boolC2"><label class="checkcontainer"><input type="checkbox" v-model="medsylObj" v-bind:value="14">vowel + multi-consonant<span class="checkmark"></span></label></div>
                  <div v-if="boolV2 && boolC1"><label class="checkcontainer"><input type="checkbox" v-model="medsylObj" v-bind:value="23">multi-vowel + consonant<span class="checkmark"></span></label></div>
                  <div v-if="boolV2 && boolC2"><label class="checkcontainer"><input type="checkbox" v-model="medsylObj" v-bind:value="24">multi-vowel + multi-consonant<span class="checkmark"></span></label></div>
                  <div v-if="boolV1 && boolC1"><label class="checkcontainer"><input type="checkbox" v-model="medsylObj" v-bind:value="31">consonant + vowel<span class="checkmark"></span></label></div>
                  <div v-if="boolV2 && boolC1"><label class="checkcontainer"><input type="checkbox" v-model="medsylObj" v-bind:value="32">consonant + multi-vowel<span class="checkmark"></span></label></div>
                  <div v-if="boolV1 && boolC2"><label class="checkcontainer"><input type="checkbox" v-model="medsylObj" v-bind:value="41">multi-consonant + vowel<span class="checkmark"></span></label></div>
                  <div v-if="boolV2 && boolC2"><label class="checkcontainer"><input type="checkbox" v-model="medsylObj" v-bind:value="42">multi-consonant + multi-vowel<span class="checkmark"></span></label></div>
                  <div v-if="boolV1 && boolC1"><label class="checkcontainer"><input type="checkbox" v-model="medsylObj" v-bind:value="313">consonant + vowel + consonant<span class="checkmark"></span></label></div>
                  <div v-if="boolV1 && boolC1 && boolC2"><label class="checkcontainer"><input type="checkbox" v-model="medsylObj" v-bind:value="314">consonant + vowel + multi-consonant<span class="checkmark"></span></label></div>
                  <div v-if="boolV2 && boolC1"><label class="checkcontainer"><input type="checkbox" v-model="medsylObj" v-bind:value="323">consonant + multi-vowel + consonant<span class="checkmark"></span></label></div>
                  <div v-if="boolC1 && boolV2 && boolC2"><label class="checkcontainer"><input type="checkbox" v-model="medsylObj" v-bind:value="324">consonant + multi-vowel + multi-consonant<span class="checkmark"></span></label></div>
                  <div v-if="boolC1 && boolV1 && boolC2"><label class="checkcontainer"><input type="checkbox" v-model="medsylObj" v-bind:value="413">multi-consonant + vowel + consonant<span class="checkmark"></span></label></div>
                  <div v-if="boolV1 && boolC2"><label class="checkcontainer"><input type="checkbox" v-model="medsylObj" v-bind:value="414">multi-consonant + vowel + multi-consonant<span class="checkmark"></span></label></div>
                  <div v-if="boolV2 && boolC1 && boolC2"><label class="checkcontainer"><input type="checkbox" v-model="medsylObj" v-bind:value="423">multi-consonant + multi-vowel + consonant<span class="checkmark"></span></label></div>
                  <div v-if="boolV2 && boolC2"><label class="checkcontainer"><input type="checkbox" v-model="medsylObj" v-bind:value="424">multi-consonant + multi-vowel + multi-consonant<span class="checkmark"></span></label></div>
                </div>
                <div class="four columns"><p>How are <strong>LAST</strong> syllables constructed?</p>
                  <div v-if="(lastLetter < 5) && boolV2 && boolV1"><label class="checkcontainer"><input type="checkbox" v-model="finalsylObj" v-bind:value="12">vowel + multi-vowel<span class="checkmark"></span></label></div>
                  <div v-if="(lastLetter > 2) && boolV1 && boolC1"><label class="checkcontainer"><input type="checkbox" v-model="finalsylObj" v-bind:value="13">vowel + consonant<span class="checkmark"></span></label></div>
                  <div v-if="(lastLetter > 2) && boolV1 && boolC2"><label class="checkcontainer"><input type="checkbox" v-model="finalsylObj" v-bind:value="14">vowel + multi-consonant<span class="checkmark"></span></label></div>
                  <div v-if="(lastLetter > 2) && boolV2 && boolC1"><label class="checkcontainer"><input type="checkbox" v-model="finalsylObj" v-bind:value="23">multi-vowel + consonant<span class="checkmark"></span></label></div>
                  <div v-if="(lastLetter > 2) && boolV2 && boolC2"><label class="checkcontainer"><input type="checkbox" v-model="finalsylObj" v-bind:value="24">multi-vowel + multi-consonant<span class="checkmark"></span></label></div>
                  <div v-if="(lastLetter < 5) && boolV1 && boolC1"><label class="checkcontainer"><input type="checkbox" v-model="finalsylObj" v-bind:value="31">consonant + vowel<span class="checkmark"></span></label></div>
                  <div v-if="(lastLetter < 5) && boolV2 && boolC1"><label class="checkcontainer"><input type="checkbox" v-model="finalsylObj" v-bind:value="32">consonant + multi-vowel<span class="checkmark"></span></label></div>
                  <div v-if="(lastLetter < 5) && boolV1 && boolC2"><label class="checkcontainer"><input type="checkbox" v-model="finalsylObj" v-bind:value="41">multi-consonant + vowel<span class="checkmark"></span></label></div>
                  <div v-if="(lastLetter < 5) && boolV2 && boolC2"><label class="checkcontainer"><input type="checkbox" v-model="finalsylObj" v-bind:value="42">multi-consonant + multi-vowel<span class="checkmark"></span></label></div>
                  <div v-if="(lastLetter > 2) && boolV1 && boolC1"><label class="checkcontainer"><input type="checkbox" v-model="finalsylObj" v-bind:value="313">consonant + vowel + consonant<span class="checkmark"></span></label></div>
                  <div v-if="(lastLetter > 2) && boolV1 && boolC1 && boolC2"><label class="checkcontainer"><input type="checkbox" v-model="finalsylObj" v-bind:value="314">consonant + vowel + multi-consonant<span class="checkmark"></span></label></div>
                  <div v-if="(lastLetter > 2) && boolV2 && boolC1"><label class="checkcontainer"><input type="checkbox" v-model="finalsylObj" v-bind:value="323">consonant + multi-vowel + consonant<span class="checkmark"></span></label></div>
                  <div v-if="(lastLetter > 2) && boolC1 && boolV2 && boolC2"><label class="checkcontainer"><input type="checkbox" v-model="finalsylObj" v-bind:value="324">consonant + multi-vowel + multi-consonant<span class="checkmark"></span></label></div>
                  <div v-if="(lastLetter > 2) && boolC1 && boolV1 && boolC2"><label class="checkcontainer"><input type="checkbox" v-model="finalsylObj" v-bind:value="413">multi-consonant + vowel + consonant<span class="checkmark"></span></label></div>
                  <div v-if="(lastLetter > 2) && boolV1 && boolC2"><label class="checkcontainer"><input type="checkbox" v-model="finalsylObj" v-bind:value="414">multi-consonant + vowel + multi-consonant<span class="checkmark"></span></label></div>
                  <div v-if="(lastLetter > 2) && boolV2 && boolC1 && boolC2"><label class="checkcontainer"><input type="checkbox" v-model="finalsylObj" v-bind:value="423">multi-consonant + multi-vowel + consonant<span class="checkmark"></span></label></div>
                  <div v-if="(lastLetter > 2) && boolV2 && boolC2"><label class="checkcontainer"><input type="checkbox" v-model="finalsylObj" v-bind:value="424">multi-consonant + multi-vowel + multi-consonant<span class="checkmark"></span></label></div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="twelve columns"  v-show="generated">
                <button class="button inarow" type="button" v-on:click="getWords()">re-generate all</button>
                <button class="button inarow" type="button" v-on:click="startOver(name)">modify words</button>
              </div>
            </div>
            <div class="row">
              <div class="six columns" v-show="!generated">
                <input type="text" v-model="name" value="" placeholder="vocabulary name" class="u-full-width" />
              </div>
              <div class="three columns" v-show="!generated">
                <button class="button" type="button" v-on:click="getWords()">generate</button>
              </div>
            </div>
            <div v-show="generated">
              <div class="row">
                <div class="twelve columns">
                  <h5 class="bordered fauxbtn" v-on:click="getWord(1)">One syllable &ndash; click to rerun</h5>
                  <ul class="wordlist">
                    <li v-for="(word, index) in wordlist.one" v-bind:key="index">{{word}}</li>
                  </ul>
                </div>
              </div>
              <div class="row">
                <div class="twelve columns">
                  <h5 class="bordered fauxbtn" v-on:click="getWord(2)">two syllables &ndash; click to rerun</h5>
                  <ul class="wordlist">
                    <li v-for="(word, index) in wordlist.two" v-bind:key="index">{{word}}</li>
                  </ul>
                </div>
              </div>
              <div class="row">
                <div class="twelve columns">
                  <h5 class="bordered fauxbtn" v-on:click="getWord(3)">three syllables &ndash; click to rerun</h5>
                  <ul class="wordlist">
                    <li v-for="(word, index) in wordlist.three" v-bind:key="index">{{word}}</li>
                  </ul>
                </div>
              </div>
              <div class="row">
                <div class="twelve columns">
                  <h5 class="bordered fauxbtn" v-on:click="getWord(4)">four syllables &ndash; click to rerun</h5>
                  <ul class="wordlist">
                    <li v-for="(word, index) in wordlist.four" v-bind:key="index">{{word}}</li>
                  </ul>
                </div>
              </div>
            </div>

          </form>

    </div>
  </div>
</template>

<script>

export default {
  name: 'vocabulary',
  data: () => ({
    isActive: true,
    generated: false,
    vocabulary: [],
    v1: 'a,e,i,o,u',
    v2: 'ea,ee,ou,io,ei,ai,eo',
    c1: 'b,c,d,f,g,h,j,k,l,m,n,p,q,r,s,t,v,w,x,z',
    c2: 'ch,sh,th,gh,st,sr,sc,ph,rh',
    firstLetter: 3,
    lastLetter: 3,
    firstLetterV1: null,
    firstLetterV2: null,
    firstLetterC1: null,
    firstLetterC2: null,
    lastLetterV1: null,
    lastLetterV2: null,
    lastLetterC1: null,
    lastLetterC2: null,
    name: '',
    firstsylObj: [],
    medsylObj: [],
    finalsylObj: [],
    wordlist: {
      one: [],
      two: [],
      three: [],
      four: []
    },
    v1Val: true,
    v2Val: true,
    c1Val: true,
    c2Val: true,
    boolV1: true,
    boolV2: true,
    boolC1: true,
    boolC2: true,
    arrFirstV1: [],
    arrFirstV2: [],
    arrFirstC1: [],
    arrFirstC2: [],
    arrLastV1: [],
    arrLastV2: [],
    arrLastC1: [],
    arrLastC2: [],
    syllableChoice: [],
    allsets: null,
    vocabs: [],
    startVal: 0,
    endVal: 0,
    enabledStart: {
      isEnabledStartVowel: true,
      isEnabledStartCons: true
    },
    enabledEnd: {
      isEnabledEndVowel: true,
      isEnabledEndCons: true
    }
  }),
  created() {
    this.vocabs = this.$cookies.keys();
  },
  methods: {
    startOver: function(val) {
      this.generated = false;
      var cookielist = this.$cookies.get(val);
      var list = JSON.parse(cookielist);
      this.name = list.name;
      this.v1 = list.v1;
      this.v2 = list.v2;
      this.c1 = list.c1;
      this.c2 = list.c2;
      this.firstLetter = list.firstLetter;
      this.firstLetterV1 = list.firstLetterV1;
      this.firstLetterV2 = list.firstLetterV2;
      this.firstLetterC1 = list.firstLetterC1;
      this.firstLetterC2 = list.firstLetterC2;
      this.lastLetter = list.lastLetter;
      this.lastLetterV1 = list.lastLetterV1;
      this.lastLetterV2 = list.lastLetterV2;
      this.lastLetterC1 = list.lastLetterC1;
      this.lastLetterC2 = list.lastLetterC2;
      this.firstsylObj = list.firstsylObj;
      this.medsylObj = list.medsylObj;
      this.finalsylObj = list.finalsylObj;
      this.SetLetters();
      this.kickStop();
      this.kickStart();
    },
    getWords: function() {
      this.setUpWords();
      this.wordlist.one = this.getWord1();
      this.wordlist.two = this.getWord2();
      this.wordlist.three = this.getWord3();
      this.wordlist.four = this.getWord4();
    },
    getWord: function(val) {
      if (val === 1) {
        this.wordlist.one = this.getWord1();
      } else if (val === 2) {
        this.wordlist.two = this.getWord2();
      } else if (val === 3) {
        this.wordlist.three = this.getWord3();
      } else {
        this.wordlist.four = this.getWord4();
      }
    },
    setUpWords: function() {
      this.generated = true;
      if (this.name === '') { this.name = 'vocab' + this.randFloor(9999, 1000); }
      var allsetObj = {
        name: this.name,
        v1: this.v1,
        v2: this.v2,
        c1: this.c1,
        c2: this.c2,
        firstLetter: this.firstLetter,
        firstLetterV1: this.firstLetterV1,
        firstLetterV2: this.firstLetterV2,
        firstLetterC1: this.firstLetterC1,
        firstLetterC2: this.firstLetterC2,
        lastLetter: this.lastLetter,
        lastLetterV1: this.lastLetterV1,
        lastLetterV2: this.lastLetterV2,
        lastLetterC1: this.lastLetterC1,
        lastLetterC2: this.lastLetterC2,
        firstsylObj: this.firstsylObj,
        medsylObj: this.medsylObj,
        finalsylObj: this.finalsylObj
      };
      this.allsets = JSON.stringify(allsetObj);
      this.$cookies.set(this.name, this.allsets, '3y', '/vocabulary');
      this.v1 ? this.allvowel = this.doubleup(this.v1) : this.allvowel = [];
      this.c1 ? this.allcon = this.doubleup(this.c1) : this.allcon = [];
      this.v2 ? this.vowelpair = this.doubleup(this.v2) : this.vowelpair = [];
      this.c2 ? this.conpair = this.doubleup(this.c2) : this.conpair = [];

      if (this.firstLetter == 2 || this.firstLetter == 4) {
        this.arrFirstV1 = this.doubleup(this.firstLetterV1);
        this.arrFirstV2 = this.doubleup(this.firstLetterV2);
      }
      if (this.firstLetter == 6 || this.firstLetter == 4) {
        this.arrFirstC1 = this.doubleup(this.firstLetterC1);
        this.arrFirstC2 = this.doubleup(this.firstLetterC2);
      }
      if (this.lastLetter == 2 || this.lastLetter == 4) {
        this.arrLastV1 = this.doubleup(this.lastLetterV1);
        this.arrLastV2 = this.doubleup(this.lastLetterV2);
      }
      if (this.lastLetter == 6 || this.lastLetter == 4) {
        this.arrLastC1 = this.doubleup(this.lastLetterC1);
        this.arrLastC2 = this.doubleup(this.lastLetterC2);
      }
    },
    getWord1: function() {
      var k = 0;
      var word = '';
      var firstObjLength = this.firstsylObj.length;
      var syllableOne = [];
      for (var j = 0; j <= 20; j++) {
        for (var i = 0; i < firstObjLength; i++) {
          this.digits = this.firstsylObj[i].toString().split('').map(Number);
          var a = 1;
          var n = this.digits.length;
          for (k = 0; k < n; k++) {
            word += this.makeWord(a, i, k, n, this.digits[k]);
            a++;
          }
          if (!syllableOne.includes(word)) {
            syllableOne.push(word);
          }
          word = '';
        }
      }
      return syllableOne;
    },
    getWord2: function() {
      var k = 0;
      var word = '';
      var firstObjLength = this.firstsylObj.length;
      var finalObjLength = this.finalsylObj.length;
      var syllableTwo = [];
      for (var p = 0; p <= 12; p++) {
        for (var i = 0; i < firstObjLength; i++) {
          for (var j = 0; j < finalObjLength; j++) {
            this.digits = this.firstsylObj[i].toString().split('').map(Number);
            this.digits2 = this.finalsylObj[j].toString().split('').map(Number);
            var a = 1;
            var n1 = this.digits.length;
            var n2 = this.digits2.length;
            for (k = 0; k < n1; k++) {
              word += this.makeWord(a, n1, this.digits[k]);
              a++;
            }
            for (k = 0; k < n2; k++) {
              word += this.makeWord(a, n2, this.digits2[k]);
              a++;
            }
            if (!syllableTwo.includes(word)) {
              syllableTwo.push(word);
            }
            word = '';
            if (syllableTwo.length > 67) { break; }
          }
          if (syllableTwo.length > 67) { break; }
        }
      }
      return syllableTwo;
    },
    getWord3: function() {
      var k = 0;
      var word = '';
      var firstObjLength = this.firstsylObj.length;
      var midObjLength = this.medsylObj.length;
      var finalObjLength = this.finalsylObj.length;
      var syllableThree = [];
      for (var p = 0; p <= 12; p++) {
        for (var i = 0; i < firstObjLength; i++) {
          for (var j = 0; j < midObjLength; j++) {
            for (var g = 0; g < finalObjLength; g++) {
              this.digits = this.firstsylObj[i].toString().split('').map(Number);
              this.digits2 = this.medsylObj[j].toString().split('').map(Number);
              this.digits3 = this.finalsylObj[g].toString().split('').map(Number);
              var a = 1;
              var n1 = this.digits.length;
              var n2 = this.digits2.length;
              var n3 = this.digits3.length;
              for (k = 0; k < n1; k++) {
                word += this.makeWord(a, n1, this.digits[k]);
                a++;
              }
              for (k = 0; k < n2; k++) {
                word += this.makeWord(a, n2, this.digits2[k]);
                a++;
              }
              for (k = 0; k < n3; k++) {
                word += this.makeWord(a, n3, this.digits3[k]);
                a++;
              }
              if (!syllableThree.includes(word)) {
                syllableThree.push(word);
              }
              word = '';
              if (syllableThree.length > 62) { break; }
            }
            if (syllableThree.length > 62) { break; }
          }
          if (syllableThree.length > 62) { break; }
        }
      }
      return syllableThree;
    },
    getWord4: function() {
      var k = 0;
      var word = '';
      var firstObjLength = this.firstsylObj.length;
      var midObjLength = this.medsylObj.length;
      var finalObjLength = this.finalsylObj.length;
      var syllableFour = [];
      for (var p = 0; p <= 12; p++) {
        for (var i = 0; i < firstObjLength; i++) {
          for (var j = 0; j < midObjLength; j++) {
            for (var h = 0; h < midObjLength; h++) {
              for (var g = 0; g < finalObjLength; g++) {
                this.digits = this.firstsylObj[i].toString().split('').map(Number);
                this.digits2 = this.medsylObj[j].toString().split('').map(Number);
                this.digits3 = this.medsylObj[h].toString().split('').map(Number);
                this.digits4 = this.finalsylObj[g].toString().split('').map(Number);
                var a = 1;
                var n1 = this.digits.length;
                var n2 = this.digits2.length;
                var n3 = this.digits3.length;
                var n4 = this.digits4.length;
                for (k = 0; k < n1; k++) {
                  word += this.makeWord(a, n1, this.digits[k]);
                  a++;
                }
                for (k = 0; k < n2; k++) {
                  word += this.makeWord(a, n2, this.digits2[k]);
                  a++;
                }
                for (k = 0; k < n3; k++) {
                  word += this.makeWord(a, n3, this.digits3[k]);
                  a++;
                }
                for (k = 0; k < n4; k++) {
                  word += this.makeWord(a, n4, this.digits4[k]);
                  a++;
                }
                if (!syllableFour.includes(word)) {
                  syllableFour.push(word);
                }
                word = '';
                if (syllableFour.length > 52) { break; }
              }
              if (syllableFour.length > 52) { break; }
            }
            if (syllableFour.length > 52) { break; }
          }
          if (syllableFour.length > 52) { break; }
        }
      }
      return syllableFour;
    },
    shuffleSet: function() {
      if (this.allvowel.length) { this.allvowel = this.shuffle(this.allvowel); }
      if (this.allcon.length) { this.allcon = this.shuffle(this.allcon); }
      if (this.arrFirstV1.length) { this.arrFirstV1 = this.shuffle(this.arrFirstV1); }
      if (this.arrLastV1.length) { this.arrLastV1 = this.shuffle(this.arrLastV1); }
      if (this.arrFirstC1.length) { this.arrFirstC1 = this.shuffle(this.arrFirstC1); }
      if (this.arrLastC1.length) { this.arrLastC1 = this.shuffle(this.arrLastC1); }
      if (this.arrFirstV2.length) { this.arrFirstV2 = this.shuffle(this.arrFirstV2); }
      if (this.arrLastV2.length) { this.arrLastV2 = this.shuffle(this.arrLastV2); }
      if (this.arrFirstC2.length) { this.arrFirstC2 = this.shuffle(this.arrFirstC2); }
      if (this.arrLastC2.length) { this.arrLastC2 = this.shuffle(this.arrLastC2); }
    },
    makeWord: function(a, n, val) {
      var thing = '';
      if (val == 1) {
        if ((a == 1) && this.arrFirstV1.length) {
          thing += this.shuffle(this.arrFirstV1)[0];
        } else if ((a == n) && this.arrLastV1.length) {
          thing += this.shuffle(this.arrLastV1)[0];
        } else {
          if (!this.allvowel.length) {
            thing += '*'
          } else {
            thing += this.shuffle(this.allvowel)[0];
          }
        }
      } else if (val == 2) {
        if ((a == 1) && this.arrFirstV2.length) {
          thing += this.shuffle(this.arrFirstV2)[0];
        } else if ((a == n) && this.arrLastV2.length) {
          thing += this.shuffle(this.arrLastV2)[0];
        } else {
          if (!this.vowelpair.length) {
            thing += '*';
          } else {
            thing += this.shuffle(this.vowelpair)[0];
          }
        }
      } else if (val == 3) {
        if ((a == 1) && this.arrFirstC1.length) {
          thing += this.shuffle(this.arrFirstC1)[0];
        } else if ((a == n) && this.arrLastC1.length) {
          thing += this.shuffle(this.arrLastC1)[0];
        } else {
          if (!this.allcon.length) {
            thing += '*'
          } else {
            thing += this.shuffle(this.allcon)[0];
          }
        }
      } else {
        if ((a == 1) && this.arrFirstC2.length) {
          thing += this.shuffle(this.arrFirstC2)[0];
        } else if ((a == n) && this.arrLastC2.length) {
          thing += this.shuffle(this.arrLastC2)[0];
        } else {
          if (!this.conpair.length) {
            thing += '*';
          } else {
            thing += this.shuffle(this.conpair)[0];
          }
        }
      }
      return thing;
    },
    doubleup: function(val) {
      var valArr = val.split(',');
      var count = valArr.length;
      var arr = [];
      if ((count > 0) && (count < 8)) {
        var j = 10 - count;
        for (var i = 0; i < j; i++) {
          arr = arr.concat(valArr);
        }
      } else {
        arr = valArr;
      }
      return arr;
    },
    shuffle: function(o) {
      for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
    },
    v1Func: function() {
      if (this.v1) { this.boolV1 = true; }
      this.v1.match(/^[a-zA-Z,]+$/g) !== null ? this.v1Val = true : this.v1Val = false;
    },
    v2Func: function() {
      if (this.v2) { this.boolV2 = true; }
      this.v2.match(/^[a-zA-Z,]+$/g) !== null ? this.v2Val = true : this.v2Val = false;
    },
    c1Func: function() {
      if (this.c1) { this.boolC1 = true; }
      this.c1.match(/^[a-zA-Z,]+$/g) !== null ? this.c1Val = true : this.c1Val = false;
    },
    c2Func: function() {
      if (this.c2) { this.boolC2 = true; }
      this.c2.match(/^[a-zA-Z,]+$/g) !== null ? this.c2Val = true : this.c2Val = false;
    },
    SetLetters() {
      if (this.v1 || this.firstLetterV1 || this.lastLetterV1) { this.boolV1 = true; }
      if (this.v2 !== '' || this.firstLetterV2 !== '' || this.lastLetterV2 !== '') { this.boolV2 = true; }
      if (this.c1 || this.firstLetterC1 || this.lastLetterC1) { this.boolC1 = true; }
      if (this.c2 || this.firstLetterC2 || this.lastLetterC2) { this.boolC2 = true; }
    },
    kickStart() {
      this.firstLetter > 4 || this.firstLetter == 3 || this.firstLetter == 1 ? this.enabledStart.isEnabledStartVowel = true : this.enabledStart.isEnabledStartVowel = false;
      this.firstLetter < 4 || this.firstLetter == 5 ? this.enabledStart.isEnabledStartCons = true : this.enabledStart.isEnabledStartCons = false;
      if (this.firstLetter == 4 || this.firstLetter == 2) {
        this.firstLetterV1 = this.v1;
        this.firstLetterV2 = this.v2;
      } else {
        this.firstLetterV1 = '';
        this.firstLetterV2 = '';
      }
      if (this.firstLetter == 6 || this.firstLetter == 4) {
        this.firstLetterC1 = this.c1;
        this.firstLetterC2 = this.c2;
      } else {
        this.firstLetterC1 = '';
        this.firstLetterC2 = '';
      }
      return this.enabledStart;
    },
    kickStop() {
      this.lastLetter > 4 || this.lastLetter == 3 || this.lastLetter == 1 ? this.enabledEnd.isEnabledEndVowel = true : this.enabledEnd.isEnabledEndVowel = false;
      this.lastLetter < 4 || this.lastLetter == 5 ? this.enabledEnd.isEnabledEndCons = true : this.enabledEnd.isEnabledEndCons = false;
      if (this.lastLetter == 4 || this.lastLetter == 2) {
        this.lastLetterV1 = this.v1;
        this.lastLetterV2 = this.v2;
      } else {
        this.lastLetterV1 = '';
        this.lastLetterV2 = '';
      }
      if (this.lastLetter == 6 || this.lastLetter == 4) {
        this.lastLetterC1 = this.c1;
        this.lastLetterC2 = this.c2;
      } else {
        this.lastLetterC1 = '';
        this.lastLetterC2 = '';
      }
      return this.enabledEnd;
    },
    randFloor: function(x, y) {
      return Math.floor(Math.random() * (x - y) + y);
    }
  }
};
</script>

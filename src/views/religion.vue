<template >
  <div id="religion" class="page-body">
    <div class="container">
      <p class="aftertitle">The belief system type is randomly selected, but its specific type will impact the available options in other fields (ie number of deities).
        <span v-on:click="show = !show" class="link">Click here</span> for notes on the terminology of belief systems, clergy/leadership styles, and types of divine beings. </p>
      <div class="notes" v-show="show === true">
        <h6 class="bordered short">Belief System Types</h6>
        <ul>
          <li><strong>animism</strong>: Non-human entities (animals, plants, things, natural forces) possess a spiritual essence, separate from (and the equal of) humanity.</li>
          <li><strong>deism</strong>: A single creator-god who is separate/distinct from creation, and is not presently active in the created universe.</li>
          <li><strong>henotheism</strong>: A single creator-god is worshipped, but adherents acknowledge/accept the existence of other/outsider gods.</li>
          <li><strong>monotheism</strong>: A single creator-god who is separate/distinct from creation, but is active within the created world.</li>
          <li><strong>nontheism</strong>: A model of moral living not based on a worship of divine/supernatural; real-world examples include Buddhism and Jainism.</li>
          <li><strong>pandeism</strong>: The creator of the universe became the universe, and no longer exists as a separate, conscious entity.</li>
          <li><strong>pantheism</strong>: The divine is the sum total of all there is; everything in creation is a manifestation of that single divine.</li>
          <li><strong>panentheism</strong>: The divine interpenetrates every part of nature, but is nevertheless fully distinct from nature; the divine is part of nature while retaining an independent identity.</li>
          <li><strong>polytheism</strong>: A plurality of gods is recognized and worshipped.</li>
          <li><strong>polytheistic pantheism</strong>: The divine is the sum total of all, but it presents itself as a variety of divine individuals/beings.</li>
        </ul>
        <h6 class="bordered short">Leadership/Clergical Styles</h6>
        <p>Clergy with specialized roles will have one thing they are trained and/or allowed to do (teach, perform rituals, counsel, etc); generalized roles means the clergy may perform a variety of roles as needed. The stronger a heirarchy, the less it is able to flex for an outlier situation or extenuating circumstances. A flat, weak heirarchy, in an outlier situation, may allow one or two individuals to temporarily introduce a more vertical heirarchy. An overlapping strong heirarchy may condemn/blame leadership who are unable to reconcile conflicting orders from multiple superiors.</p>
        <ul>
            <li><strong>linear</strong>:  each person has exactly one superior and one subordinate.</li>
            <li><strong>branching</strong>:  each person has exactly one superior, and multiple subordinates.</li>
            <li><strong>flat</strong>:  each person has exactly one superior, and no subordinates.</li>
            <li><strong>overlapping</strong>:  each person has multiple superiors, and one subordinate.</li>
        </ul>
        <h6 class="bordered short">Types of Divine Beings</h6>
        <p>English is somewhat inadequate at the gender-neutral, so here are the intended words for divine beings. Use or change or whatever as you like, of course.</p>
        <ul>
            <li><strong>God</strong>: a masculine or male-identified divine being.</li>
            <li><strong>Goddess</strong>: a feminine or female-identified divine being.</li>
            <li><strong>Deities</strong>: gender-neutral, androgynous, hermaphroditic, or even paired/dual divine being(s).</li>
        </ul>
        <p>Different religions have different ways of treating or framing minor deities. A minor deity might be a demi-god, or simply a less-influential god, or an agent or messenger (ie angels). It might also be a former human, elevated to godhood
        by some means, or the spirit of a concept, in nontheistic or pantheistic religions. For ease here, I've used 'patron' to indicate the minor deity has a specific area of interest or influence.</p>
      </div>
      <div class="row extra-after">
        <div class="three columns "><button class="button" v-on:click="rollDice('one')">generate</button></div>
        <div class="three columns "><button class="button" v-on:click="rollDice('two')">generate</button></div>
        <div class="three columns "><button class="button" v-on:click="rollDice('three')">generate</button></div>
        <div class="three columns "><button class="button" v-on:click="rollDice('four')">generate</button></div>
      </div>
      <div class="row">
        <div class="twelve columns">
          <h5 class="bordered short">Divine Myths</h5>
        </div>
      </div>

      <div class="row ">
        <div class="three columns ">
          <h6>Model</h6>
          <p>{{beliefs.one.model}}</p>
          <h6>Origins</h6>
          <p v-bind:key="d" v-for="d in beliefs.one.origin">{{d}}</p>
          <h6>Major deity(s)</h6>
          <p class="fake-list" v-bind:key="d" v-for="d in beliefs.one.major">{{d}}</p>
          <h6>Minor deity(s)</h6>
          <p class="fake-list" v-bind:key="d" v-for="d in beliefs.one.minor">{{d}}</p>
          <h6>Elevated human(s)</h6>
          <p class="fake-list" v-bind:key="d" v-for="d in beliefs.one.human">{{d}}</p>
          <h6>Afterlife</h6>
          <p v-bind:key="d" v-for="d in beliefs.one.after">{{d}}</p>
        </div>
        <div class="three columns ">
          <h6>Model</h6>
          <p>{{beliefs.two.model}}</p>
          <h6>Origins</h6>
          <p v-bind:key="d" v-for="d in beliefs.two.origin">{{d}}</p>
          <h6>Major deity(s)</h6>
          <p class="fake-list" v-bind:key="d" v-for="d in beliefs.two.major">{{d}}</p>
          <h6>Minor deity(s)</h6>
          <p class="fake-list" v-bind:key="d" v-for="d in beliefs.two.minor">{{d}}</p>
          <h6>Elevated human(s)</h6>
          <p class="fake-list" v-bind:key="d" v-for="d in beliefs.two.human">{{d}}</p>
          <h6>Afterlife</h6>
          <p v-bind:key="d" v-for="d in beliefs.two.after">{{d}}</p>
        </div>
        <div class="three columns ">
          <h6>Model</h6>
          <p>{{beliefs.three.model}}</p>
          <h6>Origins</h6>
          <p v-bind:key="d" v-for="d in beliefs.three.origin">{{d}}</p>
          <h6>Major deity(s)</h6>
          <p class="fake-list" v-bind:key="d" v-for="d in beliefs.three.major">{{d}}</p>
          <h6>Minor deity(s)</h6>
          <p class="fake-list" v-bind:key="d" v-for="d in beliefs.three.minor">{{d}}</p>
          <h6>Elevated human(s)</h6>
          <p class="fake-list" v-bind:key="d" v-for="d in beliefs.three.human">{{d}}</p>
          <h6>Afterlife</h6>
          <p v-bind:key="d" v-for="d in beliefs.three.after">{{d}}</p>
        </div>
        <div class="three columns ">
          <h6>Model</h6>
          <p>{{beliefs.four.model}}</p>
          <h6>Origins</h6>
          <p v-bind:key="d" v-for="d in beliefs.four.origin">{{d}}</p>
          <h6>Major deity(s)</h6>
          <p class="fake-list" v-bind:key="d" v-for="d in beliefs.four.major">{{d}}</p>
          <h6>Minor deity(s)</h6>
          <p class="fake-list" v-bind:key="d" v-for="d in beliefs.four.minor">{{d}}</p>
          <h6>Elevated human(s)</h6>
          <p class="fake-list" v-bind:key="d" v-for="d in beliefs.four.human">{{d}}</p>
          <h6>Afterlife</h6>
          <p v-bind:key="d" v-for="d in beliefs.four.after">{{d}}</p>
        </div>
      </div>

      <div class="row">
        <div class="twelve columns">
          <h5 class="bordered short">Culture</h5>
        </div>
      </div>

      <div class="row ">
        <div class="three columns ">
          <h6>Principles</h6>
          <p v-bind:key="d" v-for="d in beliefs.one.principle">{{d}}</p>
          <h6>Ethics</h6>
          <p v-bind:key="d" v-for="d in beliefs.one.ethic">{{d}}</p>
          <h6>Attitudes</h6>
          <p v-bind:key="d" v-for="d in beliefs.one.culture">{{d}}</p>
        </div>
        <div class="three columns ">
          <h6>Principles</h6>
          <p v-bind:key="d" v-for="d in beliefs.two.principle">{{d}}</p>
          <h6>Ethics</h6>
          <p v-bind:key="d" v-for="d in beliefs.two.ethic">{{d}}</p>
          <h6>Attitudes</h6>
          <p v-bind:key="d" v-for="d in beliefs.two.culture">{{d}}</p>
        </div>
        <div class="three columns ">
          <h6>Principles</h6>
          <p v-bind:key="d" v-for="d in beliefs.three.principle">{{d}}</p>
          <h6>Ethics</h6>
          <p v-bind:key="d" v-for="d in beliefs.three.ethic">{{d}}</p>
          <h6>Attitudes</h6>
          <p v-bind:key="d" v-for="d in beliefs.three.culture">{{d}}</p>
        </div>
        <div class="three columns ">
          <h6>Principles</h6>
          <p v-bind:key="d" v-for="d in beliefs.four.principle">{{d}}</p>
          <h6>Ethics</h6>
          <p v-bind:key="d" v-for="d in beliefs.four.ethic">{{d}}</p>
          <h6>Attitudes</h6>
          <p v-bind:key="d" v-for="d in beliefs.four.culture">{{d}}</p>
        </div>
      </div>

      <div class="row">
        <div class="twelve columns">
          <h5 class="bordered short">Rituals</h5>
        </div>
      </div>

      <div class="row ">
        <div class="three columns ">
          <h6>Prayers</h6>
          <p v-bind:key="d" v-for="d in beliefs.one.prayer">{{d}}</p>
          <h6>Rituals</h6>
          <p v-bind:key="d" v-for="d in beliefs.one.ritual">{{d}}</p>
          <h6>Symbols</h6>
          <p v-bind:key="d" v-for="d in beliefs.one.symbol">{{d}}</p>
        </div>
        <div class="three columns ">
          <h6>Prayers</h6>
          <p v-bind:key="d" v-for="d in beliefs.two.prayer">{{d}}</p>
          <h6>Rituals</h6>
          <p v-bind:key="d" v-for="d in beliefs.two.ritual">{{d}}</p>
          <h6>Symbols</h6>
          <p v-bind:key="d" v-for="d in beliefs.two.symbol">{{d}}</p>
        </div>
        <div class="three columns ">
          <h6>Prayers</h6>
          <p v-bind:key="d" v-for="d in beliefs.three.prayer">{{d}}</p>
          <h6>Rituals</h6>
          <p v-bind:key="d" v-for="d in beliefs.three.ritual">{{d}}</p>
          <h6>Symbols</h6>
          <p v-bind:key="d" v-for="d in beliefs.three.symbol">{{d}}</p>
        </div>
        <div class="three columns ">
          <h6>Prayers</h6>
          <p v-bind:key="d" v-for="d in beliefs.four.prayer">{{d}}</p>
          <h6>Rituals</h6>
          <p v-bind:key="d" v-for="d in beliefs.four.ritual">{{d}}</p>
          <h6>Symbols</h6>
          <p v-bind:key="d" v-for="d in beliefs.four.symbol">{{d}}</p>
        </div>
      </div>

      <div class="row">
        <div class="twelve columns">
          <h5 class="bordered short">Special Rites</h5>
        </div>
      </div>

      <div class="row ">
        <div class="three columns ">
          <h6>Holy Days</h6>
          <p v-bind:key="d" v-for="d in beliefs.one.calendar">{{d}}</p>
          <h6>Adulthood</h6>
          <p>{{beliefs.one.adult}}</p>
          <h6>Marriage</h6>
          <p v-bind:key="d" v-for="d in beliefs.one.marry">{{d}}</p>
          <h6>Death</h6>
          <p>{{beliefs.one.death}}</p>
        </div>
        <div class="three columns ">
          <h6>Holy Days</h6>
          <p v-bind:key="d" v-for="d in beliefs.two.calendar">{{d}}</p>
          <h6>Adulthood</h6>
          <p>{{beliefs.two.adult}}</p>
          <h6>Marriage</h6>
          <p v-bind:key="d" v-for="d in beliefs.two.marry">{{d}}</p>
          <h6>Death</h6>
          <p>{{beliefs.two.death}}</p>
        </div>
        <div class="three columns ">
          <h6>Holy Days</h6>
          <p v-bind:key="d" v-for="d in beliefs.three.calendar">{{d}}</p>
          <h6>Adulthood</h6>
          <p>{{beliefs.three.adult}}</p>
          <h6>Marriage</h6>
          <p v-bind:key="d" v-for="d in beliefs.three.marry">{{d}}</p>
          <h6>Death</h6>
          <p>{{beliefs.three.death}}</p>
        </div>
        <div class="three columns ">
          <h6>Holy Days</h6>
          <p v-bind:key="d" v-for="d in beliefs.four.calendar">{{d}}</p>
          <h6>Adulthood</h6>
          <p>{{beliefs.four.adult}}</p>
          <h6>Marriage</h6>
          <p v-bind:key="d" v-for="d in beliefs.four.marry">{{d}}</p>
          <h6>Death</h6>
          <p>{{beliefs.four.death}}</p>
        </div>
      </div>

      <div class="row">
        <div class="twelve columns">
          <h5 class="bordered short">Clergy/Leadership</h5>
        </div>
      </div>

      <div class="row ">
        <div class="three columns ">
          <h6>Structure</h6>
          <p v-bind:key="d" v-for="d in beliefs.one.structure">{{d}}</p>
          <h6>Clergy</h6>
          <p v-bind:key="d" v-for="d in beliefs.one.clergy">{{d}}</p>
          <h6>Lifestyle</h6>
          <p v-bind:key="d" v-for="d in beliefs.one.order">{{d}}</p>
        </div>
        <div class="three columns ">
          <h6>Structure</h6>
          <p v-bind:key="d" v-for="d in beliefs.two.structure">{{d}}</p>
          <h6>Clergy</h6>
          <p v-bind:key="d" v-for="d in beliefs.two.clergy">{{d}}</p>
          <h6>Lifestyle</h6>
          <p v-bind:key="d" v-for="d in beliefs.two.order">{{d}}</p>
        </div>
        <div class="three columns ">
          <h6>Structure</h6>
          <p v-bind:key="d" v-for="d in beliefs.three.structure">{{d}}</p>
          <h6>Clergy</h6>
          <p v-bind:key="d" v-for="d in beliefs.three.clergy">{{d}}</p>
          <h6>Lifestyle</h6>
          <p v-bind:key="d" v-for="d in beliefs.three.order">{{d}}</p>
        </div>
        <div class="three columns ">
          <h6>Structure</h6>
          <p v-bind:key="d" v-for="d in beliefs.four.structure">{{d}}</p>
          <h6>Clergy</h6>
          <p v-bind:key="d" v-for="d in beliefs.four.clergy">{{d}}</p>
          <h6>Lifestyle</h6>
          <p v-bind:key="d" v-for="d in beliefs.four.order">{{d}}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
/*  eslint-disable quotes */
export default {
  name: 'religion',
  data: () => ({
    isActive: true,
    show: false,
    beliefs: {
      one: {},
      two: {},
      three: {},
      four: {},
      five: {}
    }
  }),
  methods: {
    rollDice: function(val) {
      var vbase = this.typeFactory();
      var dice = {
        val: val,
        type: vbase.name,
        model: this.modelFactory(vbase.name),
        major: this.majorFactory(vbase.tval),
        minor: this.minorFactory(vbase.tval),
        human: this.humanFactory(vbase.tval),
        origin: this.originFactory(vbase.tval),
        after: this.afterFactory(vbase.tval),
        principle: this.principleFactory(),
        ethic: this.ethicFactory(),
        culture: this.cultureFactory(),
        prayer: this.prayerFactory(vbase.pval),
        ritual: this.ritualFactory(),
        symbol: this.symbolFactory(),
        calendar: this.holidayFactory(),
        adult: this.ageritesFactory(),
        marry: this.marryritesFactory(),
        death: this.deathritesFactory(),
        structure: this.structureFactory(),
        clergy: this.clergyFactory(),
        order: this.orderFactory()
      }
      this.beliefs[val] = dice;
    },
    shuffle: function(o) {
      for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
    },
    replaceFactory: function(item, no1, no2) {
      num = Math.floor(Math.random() * (no1) + no2);
      var result = item.replace("#N#", num);
      return result;
    },
    typeFactory: function() {
      var tval = Math.floor(Math.random() * 31);
      if (tval > 27) {
        return types[9];
      } else if (tval > 15) {
        return types[8];
      } else if (tval > 9) {
        return types[7];
      } else if (tval > 7) {
        return types[6];
      } else if (tval > 5) {
        return types[5];
      } else {
        return types[tval];
      }
    },
    modelFactory: function(val) {
      var adjsel = '';
      line = 'The system is ' + val + '. The divine ';
      num = Math.floor(Math.random() * 12);
      var modelNoun = this.shuffle(modelNouns);
      if (num % 2 === 0) {
        if (num < 4) {
          var modelAdj2 = this.shuffle(modelAdjs2);
          adjsel = modelAdj2[0];
        } else {
          var modelAdj1 = this.shuffle(modelAdjs1);
          adjsel = modelAdj1[0];
        }
        line = line + 'is considered ' + adjsel + ', and follows a ' + modelNoun[0] + ' model.';
      } else {
        line = line + 'follows a ' + modelNoun[0] + ' model.';
      }
      return line;
    },
    majorFactory: function(val) {
      var arr = [];
      var major = this.shuffle(majors);
      if (val === 1) {
        title = 'the ' + major[0] + ' ' + this.shuffle(gods)[0];
        arr.push(title);
      } else if (val === 2) {
        num = Math.floor(Math.random() * (12) + 1);
        for (i = 0; i < num; i++) {
          title = 'the ' + major[i] + ' ' + this.shuffle(gods)[0];
          arr.push(title);
        }
      }
      return arr;
    },
    minorFactory: function(val) {
      var arr = [];
      num = Math.floor(Math.random() * (15) + 1);
      if (val === 1) {
        var patron = this.shuffle(patrons);
        for (i = 0; i < num; i++) {
          title = 'patron of ' + patron[i];
          arr.push(title);
        }
      } else if (val === 2) {
        var minor = this.shuffle(minors);
        for (i = 0; i < num; i++) {
          title = this.shuffle(gods)[0] + ' of ' + minor[i];
          arr.push(title);
        }
      }
      return arr;
    },
    humanFactory: function(val) {
      var arr = [];
      num = Math.floor(Math.random() * (19) + 1);
      if (num > 5) {
        var teach = Math.floor(Math.random() * 100);
        (teach > 1) ? line = teach + ' teachers' : line = teach + ' teacher';
        arr.push(line);
      }
      if (val < 3) {
        var proph = Math.floor(Math.random() * 20);
        (proph > 1) ? line = proph + ' prophets' : line = proph + ' prophet';
        arr.push(line);
      }
      if ((val === 2) || (val === 1)) {
        var dei = Math.floor(Math.random() * 100);
        (dei > 1) ? line = dei + ' deified humans' : line = dei + ' deified human';
        arr.push(line);
      }
      return arr;
    },
    prayerFactory: function(val) {
      var arr = [];
      var divfreq = this.shuffle(divfreqs);
      if (val > 0) {
        var pray1 = Math.floor(Math.random() * 20);
        var pray2 = Math.floor(Math.random() * 20);
        if (pray1 < 2) {
          line = 'The divine ignores or denies all petitions. ';
          arr.push(line);
        } else {
          rank = this.shuffle(ranks);
          var add = Math.floor(Math.random() * 4);
          line = 'The divine ' + divfreq[0] + ' hear ' + this.shuffle(possessives)[0] + ' petition';
          (rank[0].indexOf("#N#") > -1) ? rank = this.replaceFactory(rank[0], 80, 10) : rank = rank[0];
          if (add === 1) {
            line = line + ', unless the person is ' + rank;
          } else {
            if (add > 0) {
              line = line + ', if the person is ' + this.shuffle(positions)[0];
            }
            if (add > 1) {
              line = line + ' and ' + this.shuffle(negations)[0] + ' ' + rank;
            }
          }
          line = line + '.';
          arr.push(line);
        }
        if (pray2 < 2) {
          line = 'The divine never speaks. ';
          arr.push(line);
        } else {
          var listener = this.shuffle(listeners);
          num = Math.floor(Math.random() * (3) + 1);
          for (i = 0; i < num; i++) {
            line = 'The divine ' + divfreq[i] + ' speak ' + listener[i] + '. ';
            arr.push(line);
          }
        }
      } else {
        line = 'The divine never speaks.';
        arr.push(line);
      }
      return arr;
    },
    ritualFactory: function(val) {
      var arr = [];
      num1 = Math.floor(Math.random() * (3) + 1);
      freq = this.shuffle(freqs);
      var allowance = this.shuffle(allowances);
      var preparation = this.shuffle(preparations);
      var use = this.shuffle(uses);
      (allowance[0].indexOf("#N#") > -1) ? allowance = this.replaceFactory(allowance[0], 30, 2) : allowance = allowance[0];
      line = 'Rituals are ' + freq[0] + ' ' + this.shuffle(styles)[0] + ', ' + allowance + ', and take place ' + this.shuffle(locations)[0] +
        '. Preparation involves ' + preparation[0] + ', ' + preparation[1] + ', and ' + preparation[2] + '. Rituals include ' +
        use[0] + ', ' + use[1] + ', and sometimes ' + use[2] + '. The ritual calendar is set according to ' + this.shuffle(times)[0] +
        '. Rituals begin at ' + this.shuffle(starts)[0] + ' and ' + freq[1] + ' last ' + this.shuffle(lasts)[0] + '. ';
      if (num1 > 1) {
        rank = this.shuffle(ranks);
        (rank[0].indexOf("#N#") > -1) ? rank = this.replaceFactory(rank[0], 80, 10) : rank = rank[0];
        line = line + 'Participants must ' + this.shuffle(negations)[0] + ' be ' + rank + '. ';
      }
      arr.push(line);
      return arr;
    },
    holidayFactory: function() {
      var arr = [];
      freq = this.shuffle(freqs);
      var holidaypurpose = this.shuffle(holidaypurposes);
      var holiday = this.shuffle(holidays);
      num1 = Math.floor(Math.random() * (30) + 50);
      num2 = Math.floor(num4 * (num1 / 100));
      num4 = Math.floor(Math.random() * (127) + 3);
      line = 'There are ' + num4 + ' holy days in a calendar year. ' + num2 + ' holy days focus on ' + holidaypurpose[0] + '. '
      if ((num4 - num2) < 5) {
        line = line + 'The remainder commemorate ' + holidaypurpose[1] + ' and ' + holidaypurpose[2] + '. ';
      } else {
        var num10 = Math.floor(Math.random() * (30) + 50);
        var num20 = Math.floor(num3 * (num10 / 100));
        line = line + num20 + ' holy days celebrate ' + holidaypurpose[1] + '. '
        if ((num4 - num2) < 2) {
          line = line + 'The remainder commemorate ' + holidaypurpose[2] + ' and ' + holidaypurpose[3] + '. ';
        }
      }
      line = line + 'Holy days begin at ' + this.shuffle(starts)[0] + ' and ' + freq[0] + ' last ' +
        this.shuffle(lasts)[0] + '.  Celebrations include ' + holiday[0] + ' and ' + holiday[1] + this.shuffle(conjunctions)[0] + holiday[2] + '. ';
      arr.push(line);
      return arr;
    },
    ageritesFactory: function() {
      var agerite = this.shuffle(agerites);
      (agerite[0].indexOf("#N#") > -1) ? agerite[0] = this.replaceFactory(agerite[0], 12, 3) : agerite[0] = agerite[0];
      (agerite[1].indexOf("#N#") > -1) ? agerite[1] = this.replaceFactory(agerite[1], 7, 1) : agerite[1] = agerite[1];
      (agerite[2].indexOf("#N#") > -1) ? agerite[2] = this.replaceFactory(agerite[2], 15, 5) : agerite[2] = agerite[2];
      line = 'Coming-of-age rites require ' + agerite[0] + ', ' + agerite[1] + this.shuffle(conjunctions)[0] + agerite[2] + '.';
      return line;
    },
    marryritesFactory: function() {
      var arr = [];
      var marryrite = this.shuffle(marryrites);
      var marryask = this.shuffle(marryasks);
      var marrycele = this.shuffle(marryceles);
      conjunction = this.shuffle(conjunctions);
      (marryrite[0].indexOf("#N#") > -1) ? marryrite[0] = this.replaceFactory(marryrite[0], 12, 2) : marryrite[0] = marryrite[0];
      (marryrite[1].indexOf("#N#") > -1) ? marryrite[1] = this.replaceFactory(marryrite[1], 7, 2) : marryrite[1] = marryrite[1];
      (marryrite[2].indexOf("#N#") > -1) ? marryrite[2] = this.replaceFactory(marryrite[2], 12, 2) : marryrite[2] = marryrite[2];
      (marrycele[0].indexOf("#N#") > -1) ? marryrite[0] = this.replaceFactory(marrycele[0], 12, 2) : marryrite[0] = marrycele[0];
      (marrycele[1].indexOf("#N#") > -1) ? marryrite[1] = this.replaceFactory(marrycele[1], 7, 2) : marryrite[1] = marrycele[1];
      line = 'Marriage is ' + marryrite[0] + ', ' + marryrite[1] + conjunction[0] + marryrite[2] + '. Initiating or arranging a marriage is usually a ' + marryask[0] + ' role' + conjunction[1] + 'a ' + marryask[1] + ' role. Marriages usually include ' + marryrite[0] + conjunction[2] + marryrite[1] + '.';
      arr.push(line);
      return arr;
    },
    deathritesFactory: function() {
      var deathrite = this.shuffle(deathrites);
      (deathrite[0].indexOf("#N#") > -1) ? deathrite[0] = this.replaceFactory(deathrite[0], 12, 3) : deathrite[0] = deathrite[0];
      (deathrite[1].indexOf("#N#") > -1) ? deathrite[1] = this.replaceFactory(deathrite[1], 7, 1) : deathrite[1] = deathrite[1];
      (deathrite[2].indexOf("#N#") > -1) ? deathrite[2] = this.replaceFactory(deathrite[2], 15, 5) : deathrite[2] = deathrite[2];
      line = 'Death rites require ' + deathrite[0] + ', ' + deathrite[1] + this.shuffle(altconjunctions)[0] + deathrite[2] + '. Bodies are ' + this.shuffle(burials)[0] + '.';
      return line;
    },
    structureFactory: function(val) {
      var arr = [];
      var clergyfunction = this.shuffle(clergyfunctions);
      line = 'The religious heirarchy is ' + this.shuffle(heirarchys)[0] + ', and religious roles are ' + this.shuffle(roles)[0] +
      '. Primary functions are to ' + clergyfunction[0] + ', ' + clergyfunction[1] + this.shuffle(altconjunctions)[0] + clergyfunction[2] + '.';
      arr.push(line);
      return arr;
    },
    clergyFactory: function(val) {
      var arr = [];
      rank = this.shuffle(ranks);
      var clergystart = this.shuffle(clergystarts);
      (rank[0].indexOf("#N#") > -1) ? rank = this.replaceFactory(rank[0], 80, 10) : rank = rank[0];
      line = 'Clergy are ' + this.shuffle(persons)[0] + ' who are ' + rank + ' and ' + this.shuffle(negations)[0] + ' ' + this.shuffle(positions)[0] +
      '. Membership in an order requires being ' + clergystart[0] + this.shuffle(altconjunctions)[1] + clergystart[1] + '.';
      arr.push(line);
      return arr;
    },
    orderFactory: function(val) {
      var arr = [];
      var clergystyle = this.shuffle(clergystyles);
      var clergydisplay = this.shuffle(clergydisplays);
      line = ' The average clergical lifestyle is ' + clergystyle[0] + ', although some live in a ' +
      clergystyle[1] + ' manner. Clergy are expected to be ' + this.shuffle(clergyfamilys)[0] + ', and display their status with ' +
      clergydisplay[0] + this.shuffle(altconjunctions)[2] + clergydisplay[1] + '.';
      arr.push(line);
      return arr;
    },
    originFactory: function(val) {
      var arr = [];
      num = Math.floor(Math.random() * 12);
      if ((val < 1) || (num < 2)) {
        line = 'The myth does not have a creation story, or does not consider it important.';
        arr.push(line);
      } else {
        var creation = this.shuffle(creations);
        var mortal = this.shuffle(mortals);
        line = 'The world was created ' + creation[0] + ', and people were made from ' + mortal[0] + '. ';
        if (num % 2 === 0) {
          line = line + 'It is heresy to say humans were made from ' + mortal[1] + ', or from ' + mortal[2] + '.';
        }
        arr.push(line);
      }
      return arr;
    },
    afterFactory: function(val) {
      var arr = [];
      num = Math.floor(Math.random() * 12);
      if ((val < 1) || (num < 2)) {
        line = 'There is no belief in an afterlife.';
        arr.push(line);
      } else {
        var afterlife = this.shuffle(afterlifes);
        line = 'Life after death is ' + afterlife[0] + ',  although minor sects say the afterlife is ' + afterlife[1] + '. The afterlife can ' + this.shuffle(negations)[0] + ' be reached by living humans.';
        arr.push(line);
      }
      return arr;
    },
    principleFactory: function(val) {
      var arr = [];
      var goal1 = this.shuffle(goals);
      var goal2 = this.shuffle(goals);
      line = 'In general, the religion is focused on ' + goal1[0] + ', ' + goal1[1] + ', and to a lesser degree, ' +
      goal1[2] + '. On a personal level, people focus on ' + goal2[0] + ', ' + goal2[1] + ', and sometimes ' + goal2[2] + '.';
      arr.push(line);
      return arr;
    },
    ethicFactory: function(val) {
      var arr = [];
      var virtue = this.shuffle(virtues);
      var vice = this.shuffle(vices);
      var taboo = this.shuffle(taboos);
      line = 'Good people are expected to be ' + virtue[0] + ' and ' + virtue[1] + '. Evil is defined as ' +
      vice[0] + ', ' + vice[1] + ', and ' + vice[2] + '. Taboo subjects are ' + taboo[0] + ', ' +
      taboo[1] + this.shuffle(altconjunctions)[0] + taboo[2] + '.';
      arr.push(line);
      return arr;
    },
    cultureFactory: function(val) {
      var arr = [];
      var spirit = this.shuffle(spirits);
      var attitude = this.shuffle(attitudes);
      var art = this.shuffle(arts);
      var outsider = this.shuffle(outsiders);
      line = 'The spirit world includes ' + spirit[0] + ', ' + spirit[1] + this.shuffle(altconjunctions)[0] +
      spirit[2] + '. The average person ' + attitude[1] + ' any spirits' + this.shuffle(altconjunctions)[0] +
      attitude[2] + ' them. The highest art forms are ' + art[0] + ', ' + art[1] + this.shuffle(altconjunctions)[0] + art[2] +
      '. Outsiders are usually ' + outsider[0] + this.shuffle(altconjunctions)[0] + outsider[1] + '.';
      arr.push(line);
      return arr;
    },
    symbolFactory: function(val) {
      var arr = [];
      var symbol = this.shuffle(symbols);
      var color = this.shuffle(colors);
      (symbol[0].indexOf("#N#") > -1) ? symbol[0] = this.replaceFactory(symbol[0], 12, 2) : symbol[0] = symbol[0];
      (symbol[1].indexOf("#N#") > -1) ? symbol[1] = this.replaceFactory(symbol[1], 12, 2) : symbol[1] = symbol[1];
      (symbol[2].indexOf("#N#") > -1) ? symbol[2] = this.replaceFactory(symbol[2], 12, 2) : symbol[2] = symbol[2];
      (symbol[3].indexOf("#N#") > -1) ? symbol[3] = this.replaceFactory(symbol[3], 12, 2) : symbol[3] = symbol[3];
      line = 'The most important symbol consists of ' + symbol[0] + ' and ' + symbol[1] + ". Lesser symbols are " + symbol[2] + ' and ' +
      symbol[3] + '. The most common liturgical colors are  ' + color[0] + ' and ' + color[1] + '. The highest religious ranks wear ' +
      color[2] + ', and ' + color[3] + ' is reserved for holy days.';
      arr.push(line);
      return arr;
    }
  }
};

var i = 0;
var line = '';
var title = '';
var num = 0;
var num1 = 0;
var num2 = 0;
var num3 = 0;
var num4 = 0;
var rank = '';
var freq = '';
var conjunction = '';
var types = [
  { value: 1, name: "nontheistic", tval: 0, pval: 0 },
  { value: 2, name: "pandeistic", tval: 0, pval: 0 },
  { value: 3, name: "deistic", tval: 1, pval: 0 },
  { value: 4, name: "henotheistic", tval: 1, pval: 1 },
  { value: 5, name: "panentheistic", tval: 1, pval: 1 },
  { value: 6, name: "monotheistic", tval: 1, pval: 1 },
  { value: 7, name: "pantheistic", tval: 1, pval: 1 },
  { value: 8, name: "poly-pantheistic", tval: 2, pval: 1 },
  { value: 9, name: "polytheistic", tval: 2, pval: 1 },
  { value: 10, name: "animist", tval: 2, pval: 1 }
];

var freqs = [
  "always",
  "usually",
  "occasionally",
  "mostly"
];

var negations = [
  "",
  "not"
];

var conjunctions = [
  ", although sometimes ",
  ", and often ",
  ", and more rarely ",
  ", but never "
];

var altconjunctions = [
  ", and sometimes ",
  ", and always ",
  ", and more rarely "
];

var persons = [
  "men",
  "women",
  "people",
  "3rd gender",
  "widow/ers",
  "virgins",
  "foreigners",
  "parents"
];

var ranks = [
  "noble",
  "royal",
  "younger than #N# years",
  "older than #N# years",
  "working-class",
  "military",
  "below a certain social rank",
  "above a certain social rank"
];

var positions = [
  "of Y profession",
  "of Z ancestry",
  "trained in military skills",
  "trained in politics",
  "possessing a specific ability",
  "from a certain family"
];

var modelAdjs1 = [
  "patriarchial",
  "matriarchial"
];

var modelAdjs2 = [
  "androgynous",
  "hermaphroditic"
];

var modelNouns = [
  "familial",
  "bureaucratic",
  "constellation",
  "heroic/mythic",
  "nature-derived",
  "elemental",
  "tribal"
];

var gods = [
  "god",
  "goddess",
  "deities",
  "god",
  "goddess",
  "deity"
];

var majors = [
  "Social Order",
  "Divination",
  "Morality",
  "Wealth",
  "Mercy",
  "Tenacious",
  "Shape-Shifting",
  "Sorcery",
  "Rain",
  "Plants",
  "Unity",
  "Blessings",
  "Protection",
  "Disruption",
  "Oracles",
  "Crops",
  "Restoration",
  "Iron",
  "Steel",
  "Bronze",
  "Apprentice",
  "Archer",
  "Architect",
  "Arrogant",
  "Assassin",
  "Astronomer",
  "Autumn",
  "Baker",
  "Banker",
  "Bartender",
  "Battle",
  "Beautiful",
  "Beekeeper",
  "Beggar",
  "Mapmaker",
  "Navigator",
  "Bellmaker",
  "Bird",
  "Blacksmith",
  "Boatmen",
  "Border",
  "Brave",
  "Brawl",
  "Brewer",
  "Bricklayer",
  "Bridge-builder",
  "Business",
  "Butcher",
  "Cabinetmaker",
  "Candlemaker",
  "Carpenter",
  "Cat",
  "Celebration",
  "Chaos",
  "Charcoal-burner",
  "Charisma",
  "Chemist",
  "Children",
  "City",
  "Clerk",
  "Clockmaker",
  "Clothmaker",
  "Cobbler",
  "Cooking",
  "Counselor",
  "Courier",
  "Courtesan",
  "Courtship",
  "Creation",
  "Crossroads",
  "Currier",
  "Dance",
  "Darkness",
  "Dawn",
  "Day",
  "Daydream",
  "Death",
  "Debt",
  "Deceit",
  "Desert",
  "Desire",
  "Destruction",
  "Diplomacy",
  "Disease",
  "Doctor",
  "Dog",
  "Dream",
  "Duel",
  "Dyer",
  "Earth",
  "Engineer",
  "Famine",
  "Farmer",
  "Fate",
  "Fearful",
  "Fearless",
  "Fear-making",
  "Feast",
  "Fertility",
  "Fieldhand",
  "Fire",
  "Fish",
  "Fishermen",
  "Florist",
  "Flower",
  "Foreigner",
  "Forest",
  "Fortune",
  "Foundry",
  "Friendship",
  "Gambling",
  "Gardener",
  "Ghost",
  "Glassmaker",
  "Goldsmith",
  "Gravedigger",
  "Graves",
  "Guardian",
  "Harvest",
  "Hoofed",
  "Horned",
  "Horse",
  "Hunting",
  "Innkeeper",
  "Innocence",
  "Inspiration",
  "Jeweler",
  "Joyful",
  "Judging",
  "Just",
  "Key",
  "Kitchen",
  "Knowledge",
  "Laborer",
  "Laundry-worker",
  "Lawful",
  "Librarian",
  "Light",
  "Locked",
  "Lost",
  "Love",
  "Lovers",
  "Lucky",
  "Lust",
  "Madness",
  "Marriage",
  "Meadow",
  "Medicine",
  "Memory",
  "Merchant",
  "Messenger",
  "Midnight",
  "Midwife",
  "Miller",
  "Miner",
  "Misery",
  "Mist",
  "Money",
  "Moon",
  "Mountain",
  "Muscian",
  "Musical",
  "Mystery",
  "Naming",
  "Nature",
  "Night",
  "Nightmare",
  "Nomad",
  "Nursing",
  "Oathbreaking",
  "Oathmaking",
  "Ocean",
  "Old",
  "Orphan",
  "Outsider",
  "Painter",
  "Parenthood",
  "Parenthood",
  "Passionate",
  "Pawnbroker",
  "Peaceful",
  "Perfumed",
  "Pig-keeper",
  "Pilgrim",
  "Poet",
  "Politician",
  "Potter",
  "Farseeing",
  "Prosperity",
  "Rain",
  "Reborn",
  "Refiner",
  "Revelry",
  "River",
  "Runaway",
  "Sacrifice",
  "Saddle-maker",
  "Sailor",
  "Scholar",
  "Sciencist",
  "Sculptor",
  "Sea",
  "Seafarer",
  "Secret",
  "Seduction",
  "Servant",
  "Shadow",
  "Shame",
  "Shepherd",
  "Silent",
  "Sky",
  "Sleeping",
  "Snow",
  "Soldier",
  "Sorrowful",
  "Spring",
  "Horsebreeder",
  "Star",
  "Stonecutter",
  "Storm",
  "Storyteller",
  "Strength",
  "Strife",
  "Student",
  "Summer",
  "Sun",
  "Surgeon",
  "Swineherd",
  "Tailor",
  "Tanner",
  "Teacher",
  "Thief",
  "Thunder",
  "Time",
  "Tinsmith",
  "Torment",
  "Trapped",
  "Traveller",
  "Trickster",
  "Truss-maker",
  "Truth",
  "Twilight",
  "Undertaker",
  "Underworld",
  "Vengeful",
  "Victorious",
  "Vintner",
  "War",
  "Warrior",
  "Water",
  "Weaver",
  "Wilderness",
  "Wind",
  "Winged",
  "Winter",
  "Wisdom",
  "Wish",
  "Wood-carver",
  "Wrathful",
  "Young",
  "Old"
];

var minors = [
  "Social Order",
  "Divination",
  "Morality",
  "Wealth",
  "Mercy",
  "Perseverance",
  "Shape-Shifting",
  "Sorcery",
  "Rain",
  "Plants",
  "Unity",
  "Blessings",
  "Protection",
  "Disruption",
  "Oracles",
  "Crops",
  "Restoration",
  "Iron",
  "Steel",
  "Bronze",
  "Agriculture",
  "Apprenticeship",
  "Archery",
  "Architecture",
  "Arrogance",
  "Assassination",
  "Astronomy",
  "Autumn",
  "Baking",
  "Banking",
  "Bardship",
  "Bartending",
  "Battle",
  "Beauty",
  "Mapmaking",
  "Naviation",
  "Beekeeping",
  "Beggars",
  "Bellmaking",
  "Birds",
  "Birth",
  "Blacksmithing",
  "Boat People",
  "Borders",
  "Fighting",
  "Brewing",
  "Bricklaying",
  "Bridges",
  "Business",
  "Butchering",
  "Cabinetmaking",
  "Candlemaking",
  "Carpentry",
  "Cats",
  "Celebrations",
  "Chaos",
  "Charcoal-burning",
  "Chemistry",
  "Alchemy",
  "Children",
  "a capital city",
  "Clerking",
  "Clockmaking",
  "Textiles",
  "Shoemaking",
  "Cooking",
  "Counseling",
  "Courtesans",
  "Courtship",
  "Creation",
  "Crossroads",
  "Animal Husbandry",
  "Dance",
  "Darkness",
  "Dawn",
  "Day",
  "Death",
  "Rituals",
  "Debts",
  "Deceit",
  "Desire",
  "Destruction",
  "Diplomacy",
  "Disease",
  "Doctors",
  "Dogs",
  "Dreams",
  "Duels",
  "Cloth-dying",
  "Earth",
  "Engineering",
  "Famine",
  "Farming",
  "Fate",
  "Fear",
  "Feasts",
  "Fertility",
  "the Harvest",
  "Fire",
  "Fishing",
  "Flowers",
  "Fog",
  "Foreigners",
  "Forests",
  "Fortune",
  "Foundry-working",
  "Friendship",
  "Gambling",
  "Gardening",
  "Ghosts",
  "Glassmaking",
  "Goldsmithing",
  "Gravedigging",
  "Guarding",
  "Healing",
  "Holidays",
  "Hoofed creatures",
  "Horned creatures",
  "Horses",
  "Hunting",
  "Innkeeping",
  "Innocence",
  "Inspiration",
  "Jewelry",
  "Joy",
  "Justice",
  "Keys",
  "Kitchen",
  "Knowledge",
  "Laboring",
  "Laundry-working",
  "Laws",
  "Judgment",
  "Librarians",
  "Life",
  "Light",
  "Loss",
  "Lost Souls",
  "Love",
  "Luck",
  "Lust",
  "Madness",
  "Marriage",
  "Meadows",
  "Medicine",
  "Memory",
  "Messages",
  "Midnight",
  "Midwives",
  "Milling",
  "Mining",
  "Misery",
  "Money",
  "Mountains",
  "Muscians",
  "Music",
  "Mysteries",
  "Names",
  "Typhoons",
  "Night",
  "Nightmares",
  "Nomads",
  "Nurses",
  "Oaths",
  "the Oceans",
  "the Sea",
  "Orphans",
  "Outsiders",
  "Painting",
  "Parenthood",
  "Passion",
  "Pawnbroking",
  "Peace",
  "Perfumes",
  "Pig-keeping",
  "Pilgrims",
  "Poetry",
  "Politics",
  "Pottery",
  "Prophecy",
  "Prosperity",
  "Rain",
  "Rebirth",
  "Refining",
  "Revelry",
  "Rivers",
  "Escape",
  "Refuge",
  "Sacrifice",
  "Leatherwork",
  "Sailing",
  "Scholarship",
  "Science",
  "Sculpting",
  "Sea creatures",
  "Seafaring",
  "Secrets",
  "Seduction",
  "Serving",
  "Shadows",
  "Shame",
  "Smithing",
  "Shepherding",
  "Silence",
  "Sleep",
  "Snow",
  "Soldiering",
  "Sorrow",
  "Spring",
  "Stablekeeping",
  "Stonecutting",
  "Storms",
  "Storytelling",
  "Strength",
  "Strife",
  "Learning",
  "Summer",
  "Surgery",
  "Tailoring",
  "Lace-making",
  "Tatting",
  "Sewing",
  "Tanning",
  "Teaching",
  "the Desert",
  "the Moon",
  "the Sky",
  "the Stars",
  "the Sun",
  "the Theater",
  "the Underworld",
  "the Market",
  "the Wilderness",
  "the Wind",
  "Thieves",
  "Thunder",
  "Clocks",
  "Tinsmiths",
  "Torment",
  "Trapping",
  "Travelling",
  "Trickery",
  "House-building",
  "Truth",
  "Twilight",
  "Burial",
  "Cremation",
  "Valour",
  "Vengeance",
  "Victory",
  "Winemaking",
  "Warfare",
  "Warriorship",
  "Water",
  "Weaving",
  "Winged creatures",
  "Winter",
  "Wisdom",
  "Wishes",
  "Wood-carving",
  "Wrath",
  "Youth",
  "Old Age"
];

var patrons = [
  "Farmers",
  "Apprentices",
  "Archers",
  "Architects",
  "Assassins",
  "Astronomers",
  "Bakers",
  "Shape-Shifters",
  "Sorcerers",
  "Oracles",
  "Bankers",
  "Bards",
  "Bartenders",
  "Beekeepers",
  "Beggars",
  "Bellmakers",
  "Wild Creatures",
  "Mapmakers",
  "Navigators",
  "Mothers",
  "Fathers",
  "Parents",
  "Blacksmiths",
  "Boatmen",
  "Fighters",
  "Brewers",
  "Bricklayers",
  "Bridge-builders",
  "Butchers",
  "Cabinetmakers",
  "Candlemakers",
  "Carpenters",
  "Charcoal-burners",
  "Chemists",
  "Children",
  "the capital city",
  "Clerks",
  "Clockmakers",
  "Clothmakers",
  "Cobblers",
  "Cooks",
  "Counselors",
  "Couriers",
  "Courtesans",
  "Curriers",
  "Dancers",
  "Dreamers",
  "the dying",
  "Debtors",
  "Deceivers",
  "Diplomats",
  "the diseased",
  "Doctors",
  "Dogbreeders",
  "Horse traders",
  "Duelists",
  "Dyers",
  "Engineers",
  "the starving",
  "Feastgivers",
  "Fieldhands",
  "the harvest",
  "Fishermen",
  "Florists",
  "Foreigners",
  "Foundry-workers",
  "Distant Friends",
  "Gamblers",
  "Gardeners",
  "Wainwrights",
  "Glassmakers",
  "Goldsmiths",
  "Gravediggers",
  "Guards",
  "Hunters",
  "Innkeepers",
  "Innocents",
  "Jewelers",
  "Judges",
  "Locksmiths",
  "Laborers",
  "Laundry-workers",
  "Lawyers",
  "Librarians",
  "Lost Souls",
  "Lost Causes",
  "Lovers",
  "Invalids",
  "Mad Souls",
  "Married people",
  "Healers",
  "Merchants",
  "Messengers",
  "Night Guards",
  "Midwives",
  "Millers",
  "Miners",
  "the poor",
  "Muscians",
  "Matchmakers",
  "Namegivers",
  "Nomads",
  "Nurses",
  "Orphans",
  "Outsiders",
  "Painters",
  "Parents",
  "Pawnbrokers",
  "Peacemakers",
  "Perfumers",
  "Pig-keepers",
  "Pilgrims",
  "Poets",
  "Politicianss",
  "Potters",
  "Prophets",
  "the reborn",
  "Refiners",
  "Revelers",
  "River people",
  "Runaways",
  "Mourners",
  "Saddle-makers",
  "Sailors",
  "Scholars",
  "Scientists",
  "Sculptors",
  "Seafarers",
  "Seducers",
  "Servants",
  "Smiths",
  "Shepherds",
  "the mute",
  "the deaf",
  "Soldiers",
  "the grieving",
  "Stablemen",
  "Stonecutters",
  "Storytellers",
  "Strongmen",
  "Students",
  "Surgeons",
  "Swineherds",
  "Tailors",
  "Tanners",
  "Teachers",
  "Desert-dwellers",
  "Forest-dwellers",
  "Mountain-dwellers",
  "Actors",
  "Thieves",
  "Tinsmiths",
  "Trappers",
  "Travellers",
  "Refugees",
  "Tricksters",
  "Truss-makers",
  "Truth-tellers",
  "Liars",
  "Undertakers",
  "Vintners",
  "Warriors",
  "Weavers",
  "Wood-carvers",
  "Children",
  "the elderly"
];

var divfreqs = [
  "will always",
  "will often",
  "is more likely to",
  "will sometimes",
  "is less likely to",
  "will never"
];

var possessives = [
  "a man's",
  "a woman's",
  "an adult's",
  "a third-gendered person's",
  "a child's",
  "an elder's",
  "a parent's",
  "a sibling's",
];

var listeners = [
  "to military leaders",
  "through prophets",
  "on auspicious/holy days",
  "during specific sacrifices",
  "to people of X profession",
  "to people of Y class",
  "to people of Z ancestry",
  "to people marked at birth",
  "through signs and messengers",
  "during times of war",
  "during certain rituals",
  "through teachers",
  "to people with certain experiences",
  "in response to certain prayers",
  "in holy locations",
  "in healing rituals",
  "to religious leaders"
];

var styles = [
  "well-organized",
  "unplanned",
  "formal",
  "informal",
  "structured",
  "freeform",
  "noisy",
  "quiet",
  "silent"
];

var allowances = [
  "public",
  "private",
  "secret",
  "solitary",
  "limited to #N# people"
];

var preparations = [
  "body-painting",
  "dietary restrictions",
  "speech taboos",
  "self-denial",
  "bathing",
  "self-sacrifice",
  "fasting",
  "meditation",
  "reciting certain words",
  "reciting certain stories",
  "purifying",
  "artifact preparation"
];

var uses = [
  "artifact use",
  "scarification",
  "tattooing",
  "speaking in tongues",
  "singing",
  "dancing",
  "chanting",
  "ritual items",
  "meditation",
  "reciting certain words",
  "reciting certain phrases",
  "initiated priests",
  "elected priests",
  "lay leaders",
  "an archaic language",
  "specific movements",
  "rote responses",
  "confessions",
  "ritual symbols",
  "special dress"
];

var locations = [
  "in an initiate's home",
  "in a government office",
  "in a royal court",
  "at a specific shrine/temple",
  "at the nearest shrine/temple",
  "at a clergy residence",
  "by a natural landmark",
  "in the open air",
  "wherever is convenient",
  "indoors",
  "over or near water",
  "anywhere well-lit"
];

var times = [
  "the tides",
  "the moon",
  "a solar cycle",
  "a solar-lunar cycle",
  "a mythic cycle",
  "the seasons",
  "the hours"
];

var starts = [
  "specific hours of the day",
  "specific hours of the night",
  "sunset",
  "dawn",
  "midnight",
  "anytime",
  "midday",
  "twilight"
];

var lasts = [
  "no more than a half-hour",
  "an hour or two",
  "to the next sunrise",
  "to the next sunset",
  "about six hours",
  "a day and night",
  "three days",
  "five days",
  "seven days"
];

var holidays = [
  "ostentatious gift-giving",
  "large-scale celebrations",
  "private family celebrations",
  "many speeches and toasts",
  "lengthy prayers",
  "exchanging small tokens",
  "public sacrifices",
  "limited fasting",
  "athletic competitions",
  "games of chance",
  "many large brawls",
  "extensive drinking",
  "sanctioned extramarital affairs",
  "criminal pardons",
  "public sentencing",
  "parades",
  "theater troupes/shows",
  "puppet shows",
  "historical recitations",
  "poetry or art events",
  "large public feasts",
  "fortune-telling",
  "chorale presentations",
  "visits with distant kin",
  "religious pilgimages"
];

var holidaypurposes = [
  "past teachers",
  "past miracles",
  "past victories",
  "new teachers",
  "recent victories",
  "past military losses",
  "political events",
  "past priests",
  "new priests",
  "astronomical events",
  "seasonal events",
  "past revelations",
  "historical events",
  "martyrs",
  "heroes",
  "great rulers",
  "current rulers",
  "deities/spirits",
  "mythic events"
];

var marryrites = [
  "arranged by families",
  "based on common affection",
  "between people of the same social class",
  "between up to #N# people",
  "automatically ended after #N# years",
  "considered a business arrangement",
  "arranged at birth",
  "dissolvable",
  "monogamous",
  "only done once a lifetime",
  "a widespread activity",
  "prompted by pregnancy",
  "for people over #N# years",
  "allowed between relatives",
  "to strengthen political ties",
  "considered sacred",
  "required if courtships last more than #N# months",
  "sealed by a transfer of wealth"
];

var marryasks = [
  "masculine",
  "feminine",
  "parental",
  "sibling's",
  "father's'",
  "mother's'",
  "matchmaker's",
  "income-earner's",
  "elder's"
];

var marryceles = [
  "a transfer of wealth",
  "a clergy's blessing",
  "highly formalized rites",
  "large-scale celebrations",
  "many speeches and toasts",
  "several marriages done simultaneously",
  "legal paperwork signing",
  "symbolic protests from kin",
  "mock attempts to buy back one of the marriage parties",
  "mock kidnapping of one or more parties",
  "lengthy recited prayers",
  "an exchange of vows",
  "auspicious date selection",
  "gift-giving between families",
  "an exchange of jewelry",
  "ritual tattooing",
  "multiple sacrifices",
  "#N# days of seclusion afterwards",
  "#N# days of seclusion beforehand",
  "an exchange of food"
];

var agerites = [
  "taking a journey",
  "defeating an opponent in a fight",
  "mediating for #N# days",
  "publicly declaring beliefs",
  "fasting for #N# days",
  "getting tattooed/scarified",
  "completing a task",
  "leading a public ceremony",
  "leading a private ceremony",
  "performing an ordeal",
  "leaving the childhood home",
  "going on a pilgrimage",
  "choosing a profession",
  "being purified",
  "passing a test of knowledge",
  "passing a test of strength",
  "promotion to a certain military rank",
  "acceptance into a certain family",
  "mastering a skill"
];

var deathrites = [
  "clergical supervision",
  "more than #N# days seclusion for kin",
  "more than #N# days of mourning for kin",
  "less than #N# days of receiving visitors",
  "extensive eulogies",
  "less than #N# days before burial",
  "dividing up property",
  "embalming the body",
  "sacrificing possessions to accompany the deceased",
  "sacrificing animals to accompany the deceased",
  "sacrificing people to accompany the deceased"
];

var burials = [
  "burned on a pyre",
  "entombed in a human-made structure",
  "put in a coffin/box and buried underground",
  "entombed in a cave",
  "buried at sea",
  "buried in a river",
  "wrapped in cloth and buried underground",
  "wrapped in cloth and set on a tree platform",
  "left exposed on a raised platform",
  "left exposed on the ground",
  "abandoned to the elements"
];

var heirarchys = [
  "linear, strong",
  "linear, weak",
  "branching, strong",
  "branching, weak",
  "flat, strong",
  "flat, weak",
  "overlapping, strong",
  "overlapping, weak"
];

var roles = [
  "specialized",
  "generalized"
];

var clergyfunctions = [
  "speak for the divine",
  "speak to the divine",
  "lead the community",
  "convert outsiders",
  "teach",
  "help poor/ill",
  "lead ceremonies/rituals",
  "interprete scripture/myth",
  "determine holiness",
  "provide spiritual protection",
  "heal the sick",
  "judge wrongdoers",
  "foretell/prophesy",
  "lead military",
  "maintain the historical record",
  "give spiritual advice",
  "talk to the dead",
  "maintain temples/shrines",
  "investigate crimes",
  "investigate sins",
  "interprete divine messages"
];

var clergystyles = [
  "monastic",
  "luxurious",
  "austere",
  "self-supporting",
  "community-supported",
  "solitary",
  "ascetic"
];

var clergyfamilys = [
  "chaste",
  "mostly chaste",
  "celibate",
  "mostly celibate",
  "promiscuous",
  "somewhat promiscuous"
];

var clergystarts = [
  "ordained by elder clergy",
  "elected by the people",
  "appointed by religious leaders",
  "appointed by military leaders",
  "appointed by political leaders",
  "schooling",
  "chosen by divine revelation",
  "born into a specific family",
  "selected at birth",
];

var clergydisplays = [
  "visible tattoos",
  "facial scars",
  "stylized clothing",
  "a special uniform",
  "a dietary code",
  "special jewelry",
  "scholarly knowledge",
  "supernatural abilities",
  "dyed hair",
  "shorn/shaved head",
  "symbolic weaponry",
  "bonds to a certain location"
];

var goals = [
  "freedom from corruption",
  "a connection with universe",
  "spiritual growth",
  "the reduction of physical desires",
  "enlightenment",
  "physical health",
  "positive relationships",
  "personal wealth",
  "self-control",
  "harmony with nature",
  "forgiveness towards enemies",
  "avoidance of punishment",
  "converting outsiders",
  "avoiding impurity",
  "spreading peace",
  "honoring ancestors",
  "advancing knowledge",
  "upholding the family",
  "being kindness to others",
  "saving the world",
  "avoiding divine wrath",
  "community fellowship",
  "ending sin",
  "avoiding killing",
  "avoiding impurity",
  "honoring parents",
  "helping others",
  "following the rules",
  "avoiding divine wrath",
  "world domination"
];

var attitudes = [
  "dismisses",
  "denies",
  "is cautious about",
  "greatly fears",
  "doesn't worry about",
  "mistrusts",
  "avoids",
  "ignores",
  "embraces",
  "avoids",
  "tolerates"
];

var spirits = [
  "angry ghosts",
  "cursed ghosts",
  "tricksters",
  "evil spirits",
  "divine spirits",
  "guardian spirits",
  "benevolent ghosts",
  "malevolent nature spirits",
  "benevolent nature spirits",
  "ambivolent nature spirits",
  "monsters",
  "folk magic",
  "mischievious spirits"
];

var vices = [
  "sloth",
  "lust",
  "pride",
  "envy",
  "wrath",
  "gluttony",
  "avarice",
  "cowardness",
  "blasphemy",
  "apostasy",
  "despair",
  "indifference",
  "dishonesty",
  "selfishness",
  "recklessness",
  "irresponsibility",
  "faithlessness",
  "thoughtlessness",
  "apathy",
  "negligence",
  "malice",
  "unfilialness",
  "disrespect"
];

var virtues = [
  "moderate",
  "charitable",
  "tolerant",
  "humble",
  "diligent",
  "selfless",
  "responsible",
  "wise",
  "thoughtful",
  "faithful",
  "humane",
  "righteous",
  "knowledgable",
  "dignified",
  "loyal",
  "filial",
  "pious",
  "constant",
  "honest",
  "kind",
  "forgiving",
  "brave",
  "gentle",
  "respectful",
  "reverent",
  "frugal",
  "modest"
];

var taboos = [
  "sex",
  "bodily functions",
  "displays of affection",
  "strong emotions",
  "physical contact",
  "names of the dead",
  "certain clothing",
  "eye contact",
  "money",
  "hygiene",
  "mental illness",
  "incest",
  "eating certain animals",
  "eating certain animals",
  "wearing certain colors",
  "using certain language",
  "converting outsiders"
];

var arts = [
  "poetry",
  "psalms",
  "instrumental music",
  "singing",
  "dance",
  "ballads",
  "sculpture",
  "painting",
  "mosaics",
  "storytelling",
  "chanting",
  "basket weaving‎",
  "beadwork",
  "calligraphy‎",
  "drawing‎",
  "glass blowing",
  "hatmaking",
  "portraiture",
  "illustration‎",
  "leatherworking",
  "metalworking‎",
  "paper-folding‎",
  "papermaking",
  "pottery‎‎",
  "shoemaking‎",
  "theatre",
  "puppetry",
  "textiles",
  "woodcarving‎",
  "woodworking",
  "stone-carving"
];

var outsiders = [
  "welcomed",
  "ignored",
  "taxed heavily",
  "slaughtered",
  "discriminated against",
  "considered misguided",
  "banished",
  "ostracized",
  "tolerated",
  "forcibly converted",
  "taxed lightly",
  "mistrusted",
  "feared"
];

var afterlifes = [
  "cold and barren for all souls",
  "cold and barren only for wrongdoers",
  "a fiery pit only for wrongdoers",
  "a fiery pit for all souls",
  "a brief pause between lives",
  "different, depending on the person's life",
  "a peaceful place",
  "dull and gray except for heroes",
  "a means to reunite those seperated in life",
  "different for each person",
  "incomprehensible to the living",
  "a state of enlightenment"
];

var creations = [
  "as the latest in a series",
  "from a god's dismemberment",
  "by order coming from chaos",
  "by a certain god",
  "when land emerged from the waters",
  "when light emerged from the dark"
];

var mortals = [
  "clay",
  "dust",
  "divine bones",
  "divine blood",
  "divine flesh",
  "stars",
  "divine speech",
  "water",
  "fire",
  "air",
  "the divine",
  "accidental",
  "a god's need for vengeance",
  "metal",
  "plants",
  "one animal elevated above the rest",
  "mud",
  "fallen deities",
  "light",
  "darkness",
  "ashes"
];

var symbols = [
  "an open palm",
  "a fist",
  "a pointing hand",
  "a chalice",
  "a cup",
  "a saucer",
  "a mountain",
  "a river",
  "a tree",
  "an ocean wave",
  "a ship",
  "a ship-sail",
  "a fishing net",
  "an open eye",
  "a closed eye",
  "a cat eye",
  "a fish eye",
  "a sacrificial animal",
  "a predatory animal",
  "a local animal",
  "a body part",
  "a knife-blade",
  "a knife-hilt",
  "a ranged weapon",
  "a melee weapon",
  "a crown",
  "a scepter",
  "a coin",
  "a flame",
  "a fire",
  "an edible plant",
  "a poisonous plant",
  "a plant",
  "a deity",
  "a building",
  "a holy building",
  "a spiral",
  "a knot",
  "a tool",
  "a book",
  "a person sitting",
  "a person reclining",
  "a person standing",
  "a person",
  "an animal",
  "an animal part",
  "wings",
  "horns",
  "a full moon",
  "a crescent moon",
  "a half moon",
  "a quarter moon",
  "#N# interlocking shapes",
  "#N# repeating shapes",
  "the stars",
  "the sun",
  "a lightning bolt",
  "a skull",
  "a unicursal shape",
  "a #N#-pointed star",
  "a rose",
  "a peony",
  "a lotus",
  "a flower",
  "a branch",
  "a square",
  "a circle",
  "a triangle",
  "a pentagon",
  "a pentagram",
  "a hexagram",
  "a octagon",
  "stylized letter",
  "a shield",
  "a kitchen tool",
  "a torch",
  "a candle",
  "#N# animals",
  "#N# interlocking animals",
  "#N# repeating animals"
];

var colors = [
  "amber",
  "aquamarine",
  "azure",
  "beige",
  "black",
  "blue",
  "bronze",
  "brown",
  "burnt sienna",
  "burnt umber",
  "carmine",
  "cerulean blue",
  "charcoal",
  "chartreuse",
  "cobalt ",
  "copper",
  "coral",
  "crimson",
  "cyan",
  "dark blue",
  "emerald",
  "forest green",
  "fuchsia",
  "gold",
  "goldenrod",
  "gray",
  "green",
  "indian red",
  "indigo",
  "ivory",
  "khaki",
  "lamp black",
  "lavender",
  "lemon",
  "lime",
  "magenta",
  "maroon",
  "mauve",
  "ochre",
  "olive",
  "orange",
  "pewter",
  "plum",
  "puce",
  "purple",
  "raw sienna",
  "raw umber",
  "red ochre",
  "rose ",
  "saffron",
  "scarlet",
  "silver",
  "tan",
  "teal",
  "titanium ",
  "turquoise",
  "ultramarine",
  "venetian red",
  "vermillion",
  "violet",
  "viridian",
  "wheat",
  "white",
  "yellow"
];
</script>

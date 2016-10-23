/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import SiteDefinition from '../api/siteDefinition/siteDefinition.model';

Thing.find({}).remove()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    });
  });

  SiteDefinition.find({}).remove()
    .then(() => {
      SiteDefinition.create({
        facility: 'St Francis Home',
        site: '',
        dateStart: new Date(2000, 1, 3),
        agency: 'SFH',
        metro: '',
        area: '',
        fyBaseDate: new Date(2000, 1, 1),
        skillsTable: false,
        convertWait: 5,
        lockTime: false,
        orderRule: false,
        nextNoteNumber: 4017,
        nextJobXref: 1,
        nextJunkNumber: 1,
        nextResXref: 1,
        nextRidXref: 1993,
        nextCusXref: 1,
        planStart: '',
        rowsAnHour: 4,
        hourlyDefault: 0,
        upRates: 0,
        rateDate: new Date(2000, 1, 1),
        rateTime: '',
        homeCareRate: 0,
        incentiveType: 'A',
        defaultIncentive: 'M',
        designUpdate: new Date(2005, 11, 10, 11, 54, 45),
        designRecalc: new Date(2005, 12, 15, 11, 58, 32),
        standardUpdate: new Date(2000, 6, 6, 9, 37, 43),
        standardRecalc: new Date(2005, 12, 15, 11, 58, 34),
        costUpdate: '',
        costRecalc: '',
        dpp: '14',
        lptNumber: 'LPT4',
        printerType: 'HP5',
        planSaved: true,
        helpInfo: 'Design Schedules LLC at 608/831-2920',
        standardShiftMn: 0,
        axesPay: false,
        lorosklor: '',
        lorosklar: '',
        clockStart: 0,
        lfChecksum: 17077,
        appSerial: 2105,
        runLength: 6,
        diffByTref: false,
        siteAddress: '33 Everett Street',
        siteAddress2: '',
        siteCity: 'Fond du Lac',
        siteState: 'WI',
        sitePhone: '920-923-7980',
        siteLicense: '',
        ruleOfMost: 0,
        standardBreak: 0,
        standardMeal: 0,
        fhtrPerPeriod: 80,
        lastSchk: new Date(2005, 12, 19),
        diffType: '',
        klokLink: false,
        recheckPrinter: true,
        splitOverlap: 20,
        wlfxkSum: 102593,
        bestCount: '12',
        payrollPackage: '',
        payrollVersion: '',
        etUpdateTo: '',
        etUpdateOn: '',
        etUpdateAt: '',
        etUpdateBy: '',
        stableTables: true,
        dfChkxHire: 0,
        dfChkxApmt: 0,
        inChkxHire: 0,
        inChkxApmt: 0,
        careVenue: 'URBAN',
        i28wPhone: true,
        shyftymHide: true,
        offByTrefs: false,
        standardHide: false
      })
      .then(() => {
        console.log('finished populating site definitions');
      });
    });

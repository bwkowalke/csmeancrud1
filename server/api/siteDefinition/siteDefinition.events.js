/**
 * SiteDefinition model events
 */

'use strict';

import {EventEmitter} from 'events';
import SiteDefinition from './siteDefinition.model';
var SiteDefinitionEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
SiteDefinitionEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  SiteDefinition.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    SiteDefinitionEvents.emit(event + ':' + doc._id, doc);
    SiteDefinitionEvents.emit(event, doc);
  }
}

export default SiteDefinitionEvents;

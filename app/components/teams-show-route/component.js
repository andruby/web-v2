import Ember from 'ember';
import layout from './template';
import styles from './styles';

export default Ember.Component.extend({
  layout,
  localClassNames: ['teams-show-route'],
  styles,
  teamsList: Ember.inject.service(),

  actions: {
    didCreateCanvas(canvas) {
      this.sendAction('didCreateCanvas', canvas);
    }
  }
});

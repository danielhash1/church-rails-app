// app/javascript/packs/application.js

// Пример импорта других модулей или библиотек
import Rails from "@rails/ujs";
import Turbolinks from "turbolinks";
import * as ActiveStorage from "@rails/activestorage";
import "channels";
import 'bootstrap'


Rails.start();
Turbolinks.start();
ActiveStorage.start();

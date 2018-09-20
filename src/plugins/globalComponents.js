import Badge from "../components/Badge";
import BaseAlert from "../components/BaseAlert";
import BaseButton from "../components/BaseButton";
import BaseCheckbox from "../components/BaseCheckbox";
import BaseInput from "../components/BaseInput";
import BasePagination from "../components/BasePagination";
import BaseProgress from "../components/BaseProgress";
import BaseRadio from "../components/BaseRadio";
import BaseSlider from "../components/BaseSlider";
import BaseSwitch from "../components/BaseSwitch";
import Card from "../components/Card";
import Icon from "../components/Icon";
import TextIcon from "../components/TextIcon"
import BaseDropdown from "../components/BaseDropdown"

//custom components
import DateRangePicker from "../components/DateRangePicker"
import LanguageSelect from "../components/LanguageSelect"
import CollectionsSelect from "../components/CollectionsSelect"
import Map from '../components/Map'
import ReviewButtons from '../components/ReviewButtons'
import NextButton from '../components/NextButton'
import Wordcloud from '../components/Wordcloud'


export default {
    install(Vue) {
        Vue.component(BaseDropdown.name, BaseDropdown);
        Vue.component(Badge.name, Badge);
        Vue.component(BaseAlert.name, BaseAlert);
        Vue.component(BaseButton.name, BaseButton);
        Vue.component(BaseInput.name, BaseInput);
        Vue.component(BaseCheckbox.name, BaseCheckbox);
        Vue.component(BasePagination.name, BasePagination);
        Vue.component(BaseProgress.name, BaseProgress);
        Vue.component(BaseRadio.name, BaseRadio);
        Vue.component(BaseSlider.name, BaseSlider);
        Vue.component(BaseSwitch.name, BaseSwitch);
        Vue.component(Card.name, Card);
        Vue.component(Icon.name, Icon);
        Vue.component(TextIcon.name, TextIcon);
        // custom components
        Vue.component(LanguageSelect.name, LanguageSelect);
        Vue.component(CollectionsSelect.name, CollectionsSelect);
        Vue.component(DateRangePicker.name, DateRangePicker);
        Vue.component(Map.name, Map);
        Vue.component(ReviewButtons.name, ReviewButtons);
        Vue.component(NextButton.name, NextButton);
        Vue.component(Wordcloud.name, Wordcloud);

    }
};

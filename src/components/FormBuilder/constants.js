import ShortTextIcon from '@material-ui/icons/ShortText';
import SubjectIcon from '@material-ui/icons/Subject';
import LooksOneIcon from '@material-ui/icons/LooksOne';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import TodayIcon from '@material-ui/icons/Today';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import AppsIcon from '@material-ui/icons/Apps';

export const formEl = [
  {
    label: "Réponse courte",
    value: "text",
    icon: <ShortTextIcon color="secondary" />,
  },
  {
    label: "Paragraphe",
    value: "textarea",
    icon: <SubjectIcon color="secondary" />,
  },
  {
    label: "Valeur chiffrée",
    value: "number",
    icon: <LooksOneIcon color="secondary" />,
  },
  {
    label: "Choix multiples",
    value: "radio",
    icon: <CheckBoxIcon color="secondary" />,
  },
  {
    label: "Date",
    value: "date",
    icon: <TodayIcon color="secondary" />,
  },
  {
    label: "Heure",
    value: "time",
    icon: <QueryBuilderIcon color="secondary" />,
  },
  {
    label: "Grille à choix multiple",
    value: "radio-grid",
    icon: <AppsIcon color="secondary" />,
  }
];

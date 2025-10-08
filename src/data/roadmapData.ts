import { Level } from "../types/roadmap";
import { javascriptForReact } from "./sections/javascript-for-react/javascriptForReact";
import { reactBasics } from "./sections/react-basics/reactBasics";
import { stateAndEvents } from "./sections/react-hooks/stateAndEvents";
import { keysAndConditional } from "./sections/react-hooks/keysAndConditional";
import { sideEffects } from "./sections/react-hooks/sideEffects";
import { useReducerState } from "./sections/react-hooks/useReducerState";
import { contextApi } from "./sections/react-hooks/contextApi";
import { optimizationTechniques } from "./sections/advanced-react/optimizationTechniques";
import { httpRequests } from "./sections/advanced-react/httpRequests";
import { customHooks } from "./sections/advanced-react/customHooks";
import { reduxStateManagement } from "./sections/advanced-react/reduxStateManagement";
import { reactRouter } from "./sections/advanced-react/reactRouter";

const roadmapData: Level[] = [
  {
    id: "react-101",
    name: "React Temelleri",
    order: 1,
    description: "React öğrenmeye başlamak için temel kavramlar",
    categories: [javascriptForReact, reactBasics],
  },
  {
    id: "react-hooks",
    name: "React Hooks",
    order: 2,
    description: "Modern React ile state ve lifecycle yönetimi",
    categories: [
      stateAndEvents,
      keysAndConditional,
      sideEffects,
      useReducerState,
      contextApi,
    ],
  },
  {
    id: "advanced-react",
    name: "İleri Seviye React",
    order: 3,
    description: "Performans optimizasyonu ve ileri seviye kavramlar",
    categories: [
      optimizationTechniques,
      httpRequests,
      customHooks,
      reduxStateManagement,
      reactRouter,
    ],
  },
];

export default roadmapData;

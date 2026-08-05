import AfriDebugLayout from "../layout/AfriDebugLayout";
import AfriDebugTopBar from "../layout/AfriDebugTopBar";
import AfriDebugSidebar from "../layout/AfriDebugSidebar";
import AfriDebugStatusBar from "../layout/AfriDebugStatusBar";

import TopActionBar from "./components/TopActionBar";
import ProjectSourcesPanel from "./components/ProjectSourcesPanel";
import InvestigationPanel from "./components/InvestigationPanel";
import AfriAIInvestigatorPanel from "./components/AfriAIInvestigatorPanel";
import LivePreviewPanel from "./components/LivePreviewPanel";


export default function AfriDebugDesktop(){

return (

<AfriDebugLayout>

<div className="space-y-4">

<AfriDebugTopBar />


<div className="grid grid-cols-12 gap-4">


<div className="col-span-2">
<AfriDebugSidebar />
</div>


<div className="col-span-10 space-y-4">


<TopActionBar />


<div className="grid grid-cols-12 gap-4">


<div className="col-span-3">
<ProjectSourcesPanel />
</div>


<div className="col-span-4">
<InvestigationPanel />
</div>


<div className="col-span-3">
<AfriAIInvestigatorPanel />
</div>


<div className="col-span-2">
<LivePreviewPanel />
</div>


</div>


</div>


</div>


<AfriDebugStatusBar />

</div>

</AfriDebugLayout>

);

}

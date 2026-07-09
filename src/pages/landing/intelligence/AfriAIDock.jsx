import AfriAIStatusBar from "./AfriAIStatusBar";
import AfriAIConversation from "./AfriAIConversation";
import AfriAIChatInput from "./AfriAIChatInput";
import AfriAIMicButton from "./AfriAIMicButton";
import AfriAIQuickActions from "./AfriAIQuickActions";
export default function AfriAIDock(){return(<section className="glass-card ai-panel"><AfriAIStatusBar/><AfriAIConversation/><AfriAIQuickActions/><div className="afriai-chat-row"><AfriAIChatInput/><AfriAIMicButton/></div></section>);}

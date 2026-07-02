# AfriAI Plugin Contracts

Every AfriAI feature registers through one of these extension points.

## commands/
Registers user commands.
Examples:
- predict-match
- show-camera
- open-marketplace

## widgets/
Registers UI widgets.
Examples:
- Live Score Widget
- Prediction Widget
- Camera Feed Widget

## providers/
Registers backend AI providers.

## adapters/
Connects AfriAI to each AfriDigital product.

## themes/
Controls appearance.

## layout/
Controls placement of the Universal AfriAI Command Bar.

Future modules should plug into these folders instead of modifying the core command bar.

# [17.0.6] - 2023-12-12

## ddr-input

- Añadido input labelBold

## ddr-no-data

- Añadido input size

## ddr-calendar

- Añadido input required

## ddr-textarea

- Añadido input showTooltip
- Añadido input orientationTooltip
- Añadido input tooltipText

## ddr-tooltip

- Añadido input tooltipWidth

## ddr-modal

- Se ha modificado el tamaño del tamaño big de 95% a 85%

## ddr-storage

- Eliminado de providers el servicio, haciendo que pueda utilizarse en lazy load

## ddr-form-crud

- Añadida validacion, usando los inputs checkDataCreateUpdate y validDataCreateUpdate

# [17.0.5] - 2023-12-12

## ddr-app

- Añadido input showMenu

## ddr-multiple-button

- Añadido input transparent

## ddr-button

- Añadido input transparent
- Añadido input tooltipText

## ddr-graphics

- Añadido input typesAvailable
- Añadido input tooltipText
- Añadido output selectType

# [17.0.4] - 2023-12-12

## ddr-app

- Añadido input showFooter
- Añadido input fixedFooter
- Añadido input menuWidthOpen

## ddr-login

- Añadido input showLabelUser
- Añadido input showLabelPassword
- Añadido input showLabelCompany
- Añadida template extra-buttons

## ddr-table

- Eliminado input rows
- Añadido input optionsRowsPagination

## ddr-button

- Añadido el input iconLeft

## ddr-badge-pill

- Input type por defecto es INFO

# [17.0.3] - 2023-12-12

## General

- Solucionado problemas para hacer Lazy Load

# [17.0.2] - 2023-12-04

## General

- Control flow

# [17.0.1] - 2023-12-04

## General

- Actualizacion a la version 17

## Added

### ddr-drag-scroll

- Creacion de componente para sustituir a la dependencia ngx-drag-scroll

## Fixed

### ddr-word-cloud

- Componente ddr-drag-scroll adaptado

# [16.2.6] - 2023-11-23

## Added

### ddr-treeview

- Añadida propiedad actions en ddr-treenode

## Removed

### ddr-treeview

- Eliminado input actions

### ddr-form-crud

- Eliminado input actionsTreeview

# [16.2.5] - 2023-11-23

## Added

### ddr-textarea

- Evento keyup

### ddr-tabs

- Añadido icono

### ddr-chatbot

- Añadido placeholder
- Añadido openStart
- Añadido expandDialogStart

## Fixed

### ddr-chatbot

- Cambiado el tipo de messageInitial a IDdrMessage[]

### ddr-range

- Muestra label en valores singles

### DdrNgModelBase

- Mejorado para valores nulos

# [16.2.4] - 2023-11-06

## Added

### ddr-input-password

- Creacion componente

### ddr-storage

- removeKey

## Fixed

### ddr-dropdown

- labels sin ngmodel

### ddr-table

- Paginacion mejorada

# [16.2.2] - 2023-10-13

## Added

### ddr-range

- Inline

### ddr-word-cloud

- zoom

## Fixed

### ddr-calendar

- El overlay no se cierra si se muestra el tiempo en rango de fechas
- Si hay stepMinute y se muestra el tiempo, la primera vez se adecua para que no haya inconsistencias.

# [16.2.1] - 2023-10-02

## Added

### ddr-graphics

- Añadido boton mostrar/ocultar labels.
- Guardar estado ocultado de labels

## Fixed

### general

- Version 16.2.7 de angular

### ddr-range

- Arreglo de botones.
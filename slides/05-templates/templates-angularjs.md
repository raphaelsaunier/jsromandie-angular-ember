## AngularJS Templates

This is happening inside the DOM

---

form, input, [input \[checkbox]](http://docs.angularjs.org/api/ng.directive:input.checkbox), input \[email], input \[number], input \[radio], input \[text], input \[url], script, select, textarea

--

**ngApp** ngBind ngBindHtml ngBindTemplate ngBlur ngChange ngChecked ngClass ngClassEven ngClassOdd **ngClick** ngCloak ngController ngCopy ngCsp ngCut ngDblclick ngDisabled ngFocus ngForm ngHide ngHref ngIf ngInclude ngInit ngKeydown ngKeypress ngKeyup ngList ngModel ngMousedown ngMouseenter ngMouseleave ngMousemove ngMouseover ngMouseup ngNonBindable ngOpen ngPaste ngPluralize ngReadonly **ngRepeat** ngSelected **ngShow** ngSrc ngSrcset ngStyle ngSubmit ngSwitch ngTransclude ngValue

`<input ng-class="{valid: true, missing:isMissing}" ng-model="value" ngClick="clicked()">`

---

## Compile / Link

```html
Hello {{user}}, you have these actions:
<ul>
  <li ng-repeat="action in user.actions">
    {{action.description}}
  </li>
</ul>
```

---

## Scope are chained


---

Can be external file or included in the dom using a script tag with type="text/ng-template"


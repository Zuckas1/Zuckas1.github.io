class RenderTables{static $getRenderedTable(it){it.type=it.type||"table";return $$`
		${Renderer.utils.getBorderTr()}
		${Renderer.utils.getExcludedTr(it,"table")}
		${Renderer.utils.getNameTr(it,{page:UrlUtil.PG_TABLES})}
		<tr><td class="divider" colspan="6"><div></div></td></tr>
		<tr><td colspan="6">${Renderer.get().setFirstSection(true).render(it)}</td></tr>

		${it.class?`<tr class="text"><td colspan="6">\n\t\t${Renderer.get().render(`{@note ${it.__prop==="table"?`This table is`:"These tables are"} from the {@class ${it.class.name}|${it.class.source}} class.`)}\n\t\t</td></tr>`:""}

		${it.subclass?`<tr class="text"><td colspan="6">\n\t\t${Renderer.get().render(`{@note ${it.__prop==="table"?`This table is`:"These tables are"} from the {@class ${it.subclass.className}|${it.subclass.classSource}|${it.subclass.name}|${it.subclass.name}|${it.subclass.source}} <span title="Source: ${Parser.sourceJsonToFull(it.subclass.classSource)}">${it.subclass.className}</span> subclass.`)}\n\t\t</td></tr>`:""}

		${it.variantrule?`<tr class="text"><td colspan="6">\n\t\t${Renderer.get().render(`{@note ${it.__prop==="table"?`This table is`:"These tables are"} from the {@variantrule ${it.variantrule.name}|${it.variantrule.source}} optional/variant/expanded rule.`)}\n\t\t</td></tr>`:""}

		${it.chapter?`<tr class="text"><td colspan="6">\n\t\t${Renderer.get().render(`{@note ${it.__prop==="table"?`This table`:"These tables"} can be found in ${Parser.sourceJsonToFull(it.source)}${Parser.bookOrdinalToAbv(it.chapter.ordinal,true)}, {@book ${it.chapter.name}|${it.source}|${it.chapter.index}|${it.chapter.name}}.}`)}\n\t\t</td></tr>`:""}

		${Renderer.utils.getPageTr(it)}
		${Renderer.utils.getBorderTr()}`}}
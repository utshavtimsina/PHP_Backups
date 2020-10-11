"use strict";

jQuery(function ($) {
  var drawGraph, main_chart, prepareTooltip, prev_data_index, prev_series_index, showTooltip;main_chart = null, (drawGraph = function drawGraph(highlight) {
    var highlight_series, options, series;series = $.extend(!0, [], chart_data.series), options = $.extend(!0, [], chart_data.options), "undefined" !== highlight && series[highlight] && ((highlight_series = series[highlight]).color = "#98c242", highlight_series.bars && (highlight_series.bars.fillColor = "#98c242"), highlight_series.lines && (highlight_series.lines.lineWidth = 5)), main_chart = $.plot($(".main-chart"), series, options), $(".main-chart").resize();
  })(), $(".highlight_series").hover(function () {
    drawGraph($(this).data("series"));
  }, function () {
    drawGraph();
  }), showTooltip = function showTooltip(x, y, contents) {
    $('<div class="chart-tooltip">' + contents + "</div>").css({ top: y - 16, left: x + 20 }).appendTo("body").fadeIn(200);
  }, prepareTooltip = function prepareTooltip(pos, item) {
    var tooltip_content;return tooltip_content = item.series.data[item.dataIndex][1], item.series.append_tooltip && (tooltip_content += item.series.append_tooltip), item.series.pie.show ? [pos.pageX, pos.pageY, tooltip_content] : [item.pageX, item.pageY, tooltip_content];
  }, prev_data_index = null, prev_series_index = null, $(".main-chart").bind("plothover", function (event, pos, item) {
    var tooltip_data;item ? prev_data_index === item.dataIndex && prev_series_index === item.seriesIndex || (prev_data_index = item.dataIndex, prev_series_index = item.seriesIndex, $(".chart-tooltip").remove(), (item.series.points.show || item.series.enable_tooltip) && (tooltip_data = prepareTooltip(pos, item), showTooltip(tooltip_data[0], tooltip_data[1], tooltip_data[2]))) : ($(".chart-tooltip").remove(), prev_data_index = null);
  }), void 0 === document.createElement("a").download && $(".export-csv").hide(), $(".export-csv").click(function () {
    var csv_data, d, exclude_series, export_format, groupby, i, s, series, series_data, the_series, xaxes_label, xaxis;if (exclude_series = (exclude_series = (exclude_series = $(this).data("exclude_series") || "").toString()).split(","), xaxes_label = $(this).data("xaxes"), groupby = $(this).data("groupby"), export_format = $(this).data("export"), csv_data = "data:application/csv;charset=utf-8,", "table" === export_format) $(this).closest("div").find("thead tr,tbody tr").each(function () {
      return $(this).find("th,td").each(function () {
        var value;return value = (value = $(this).text()).replace("[?]", ""), csv_data += '"' + value + '",';
      });
    }), csv_data = csv_data.substring(0, csv_data.length - 1), csv_data += "\n", $(this).closest("div").find("tfoot tr").each(function () {
      return $(this).find("th,td").each(function () {
        var i, results, value;if (value = (value = $(this).text()).replace("[?]", ""), csv_data += '"' + value + '",', $(this).attr(!1)) {
          for (i = 1, results = []; i < $(this).attr("colspan");) {
            i++, results.push(csv_data += '"",');
          }return results;
        }
      }), csv_data = csv_data.substring(0, csv_data.length - 1), csv_data += "\n";
    });else {
      if (null === main_chart) return !1;for (the_series = main_chart.getData(), series = [], csv_data += xaxes_label + ",", $.each(the_series, function (index, value) {
        if (!exclude_series || -1 === $.inArray(index.toString(), exclude_series)) return series.push(value);
      }), s = 0; s < series.length;) {
        csv_data += series[s].label + ",", ++s;
      }for (csv_data = csv_data.substring(0, csv_data.length - 1), csv_data += "\n", xaxis = {}, s = 0; s < series.length;) {
        for (series_data = series[s].data, d = 0; d < series_data.length;) {
          for (xaxis[parseInt(series_data[d][0])] = new Array(), i = 0; i < series.length;) {
            xaxis[parseInt(series_data[d][0])].push(0), ++i;
          }++d;
        }++s;
      }for (s = 0; s < series.length;) {
        for (series_data = series[s].data, d = 0; d < series_data.length;) {
          xaxis[parseInt(series_data[d][0])][s] = series_data[d][1], ++d;
        }++s;
      }$.each(xaxis, function (index, value) {
        var date, val;for (date = new Date(parseInt(index)), csv_data += "day" === groupby ? date.getUTCFullYear() + "-" + parseInt(date.getUTCMonth() + 1) + "-" + date.getUTCDate() + "," : date.getUTCFullYear() + "-" + parseInt(date.getUTCMonth() + 1) + ",", d = 0; d < value.length;) {
          val = value[d], Math.round(val) !== val && (val = (val = parseFloat(val)).toFixed(2)), ++d, csv_data += val + ",";
        }return csv_data = csv_data.substring(0, csv_data.length - 1), csv_data += "\n";
      });
    }return $(this).attr("href", encodeURI(csv_data));
  });
});
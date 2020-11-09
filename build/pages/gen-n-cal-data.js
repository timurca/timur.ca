$(
            function () {

                $('#mtp  table> tbody > tr ').remove();
                $('#wtfr  table> tbody > tr ').remove();
                $('#wtsr  table> tbody > tr ').remove();
                $('#cc table> tbody > tr ').remove();
                $('#nc  table> tbody > tr ').remove();

                function update_table() {
                    $.getJSON('http://timur.ca/web/nba-proj/nbadata.json', function (data) {

                        var display_data = new Array();
                        var count = 0;
                        $('#mtp  table> tbody > tr ').remove();
                        $('#wtfr  table> tbody > tr ').remove();
                        $('#wtsr  table> tbody > tr ').remove();
                        $('#cc table> tbody > tr ').remove();
                        $('#nc  table> tbody > tr ').remove();
                        $.each(data.nba, function (index, element) {
                            var status = $('[name="status"]:checked').val();
                            var conf = $('[name="conf"]:checked').val();
                            var time = $('[name="time"]:checked').val();
                            if (time != 'all') {
                                element['first-year'] = new Date().getFullYear() - time;
                                var new_playoffs = new Array();
                                $.each(element.playoffs, function (myindex, year) {
                                    if (year > element['first-year']) {
                                        new_playoffs[myindex] = this;
                                    }

                                });

                                element.playoffs = new_playoffs;

                                var new_w1r = new Array();
                                $.each(element.w1r, function (myindex, year) {
                                    if (year >= element['first-year']) {
                                        new_w1r[myindex] = this;
                                    }

                                });
                                element.w1r = new_w1r;


                                var new_w2r = new Array();
                                $.each(element.w2r, function (myindex, year) {
                                    if (year >= element['first-year']) {
                                        new_w2r[myindex] = this;
                                    }

                                });
                                element.w2r = new_w2r;


                                var new_w3r = new Array();
                                $.each(element.w3r, function (myindex, year) {
                                    if (year >= element['first-year']) {
                                        new_w3r[myindex] = this;
                                    }

                                });
                                element.w3r = new_w3r;



                                var new_champs = new Array();
                                $.each(element.champs, function (myindex, year) {
                                    if (year >= element['first-year']) {
                                        new_champs[myindex] = this;
                                    }

                                });
                                element.champs = new_champs;


                            }

                            if (element.status != status && status != 'all') {
                                return;
                            }

                            if (element.conference != conf && conf != 'both') {
                                return;
                            }

                            count++;

                            var srno = count;
                            var name = index;
                            var unif = element.unif;
                            var playoffs = Object.keys(element.playoffs).length
                            var total = element['last-year'] - element['first-year'];
                            var total_pecent = Math.round((playoffs / total) * 100);

                            var w1r = Object.keys(element.w1r).length;
                            var w2r = Object.keys(element.w2r).length;
                            var w3r = Object.keys(element.w3r).length;
                            var champs = Object.keys(element.champs).length;
                            var hide = '';


                            if (champs == 0) {
                                hide = 'display:none';
                            }
                            var tr =
                                '<tr><td scope="row" class="c1w">' +
                                srno +
                                '</td><td class="c2w"><span class="badge badge-primary badge-pill wtbadge" id="' +
                                unif + '">' + unif + '</span></td><td><span class="wtm">' +
                                name +
                                '</span><span class="wpts"><h6 class="inln">' + playoffs +
                                '</h6></span><span class="blockquote-footer floatright">Made the Playoffs ' +
                                playoffs + '/' + total + ' = ' + total_pecent +
                                '%</span></td></tr>';
                            $('#mtp  table> tbody:last').append(tr);

                            var tr =
                                '<tr><td scope="row" class="c1w">' + srno +
                                '</td><td class="c2w"><span class="badge badge-primary badge-pill wtbadge" id="' +
                                unif + '">' + unif +
                                '</span></td><td><span class="wtm">' +
                                name +
                                '</span><span class="wpts"><h6 class="inln">' + w1r +
                                '</h6></span></td></tr>';

                            $('#wtfr  table> tbody:last').append(tr);
                            var tr =
                                '<tr><td scope="row" class="c1w">' + srno +
                                '</td><td class="c2w"><span class="badge badge-primary badge-pill wtbadge" id="' +
                                unif + '">' + unif +
                                '</span></td><td><span class="wtm">' +
                                name +
                                '</span><span class="wpts"><h6 class="inln">' + w2r +
                                '</h6></span></td></tr>';

                            $('#wtsr  table> tbody:last').append(tr);

                            var tr =
                                '<tr><td scope="row" class="c1w">' + srno +
                                '</td><td class="c2w"><span class="badge badge-primary badge-pill wtbadge" id="' +
                                unif + '">' + unif +
                                '</span></td><td><span class="wtm">' +
                                name +
                                '</span><span class="wpts"><h6 class="inln">' + w3r +
                                '</h6></span></td></tr>';

                            $('#cc  table> tbody:last').append(tr);

                            var tr =
                                '<tr>' +
                                '<td scope="row" class="c1w">' + srno + '</td>' +
                                '<td class="c2w"><span class="badge badge-primary badge-pill wtbadge" id="' +
                                unif +
                                '">' + unif + '</span></td>' +
                                '<td>' +
                                '<span class="wtm">' + name + '</span>' +
                                '<span class="wpts">' +
                                '<h6 class="inln">' + champs + '</h6>' +
                                '</span>' +
                                '<span class="floatright">' +

                                '<a data-toggle="modal" data-target="#cmp1' + srno +
                                '" style="cursor: pointer; color: #b79906;' + hide + '">' +
                                '<svg width="1.1em" height="1.1em" viewBox="0 0 16 16" class="bi bi-trophy" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
                                '<path fill-rule="evenodd" d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"></path>' +
                                '</svg>' +
                                '</a>' +

                                '<div class="modal fade" id="cmp1' + srno +
                                '" tabindex="-1" aria-labelledby="exampleModalLabel" style="display: none;" aria-hidden="true">' +
                                '<div class="modal-dialog modal-dialog-centered">' +
                                '<div class="modal-content">' +
                                '<div class="modal-header">' +
                                '<h5 class="modal-title" id="exampleModalLabel">Won an NBA' +
                                'Championship in:</h5>' +
                                '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                                '<span aria-hidden="true">×</span>' +
                                '</button>' +
                                '</div>' +
                                '<div class="modal-body">' +
                                element.champs.join() +
                                '</div>' +
                                '</div>' +
                                '</div>' +
                                '</div>' +
                                '</span>' +
                                '</td>' +
                                '</tr>';

                            $('#nc  table> tbody:last').append(tr);

                        });
                        count = 0;

                        var rows = $('#mtp  table tr:not(:first)').detach();

                        rows.sort(function (row1, row2) {
                            return parseInt($(row2).find('.inln').text()) - parseInt($(row1).find(
                                '.inln').text());
                        });
                        var rank = 1;
                        rows.each(function () {
                            $(this).find('td:first').text(rank);
                            rank++;
                            $(this).appendTo('#mtp  table');
                        });



                        var rows = $('#wtfr  table tr:not(:first)').detach();

                        rows.sort(function (row1, row2) {
                            return parseInt($(row2).find('.inln').text()) - parseInt($(row1).find(
                                '.inln').text());
                        });
                        var rank = 1;
                        rows.each(function () {
                            $(this).find('td:first').text(rank);
                            rank++;
                            $(this).appendTo('#wtfr  table');
                        });

                        var rows = $('#wtsr  table tr:not(:first)').detach();

                        rows.sort(function (row1, row2) {
                            return parseInt($(row2).find('.inln').text()) - parseInt($(row1).find(
                                '.inln').text());
                        });
                        var rank = 1;
                        rows.each(function () {
                            $(this).find('td:first').text(rank);
                            rank++;
                            $(this).appendTo('#wtsr  table');
                        });



                        var rows = $('#cc  table tr:not(:first)').detach();

                        rows.sort(function (row1, row2) {
                            return parseInt($(row2).find('.inln').text()) - parseInt($(row1).find(
                                '.inln').text());
                        });
                        var rank = 1;
                        rows.each(function () {
                            $(this).find('td:first').text(rank);
                            rank++;
                            $(this).appendTo('#cc  table');
                        });

                        var rows = $('#nc  table tr:not(:first)').detach();

                        rows.sort(function (row1, row2) {
                            return parseInt($(row2).find('.inln').text()) - parseInt($(row1).find(
                                '.inln').text());
                        });
                        var rank = 1;
                        rows.each(function () {
                            $(this).find('td:first').text(rank);
                            rank++;
                            $(this).appendTo('#nc  table');
                        });


                    });
                }
                update_table();
                $('.dropdown-menu :input').change(
                    function () {
                        update_table();
                    }
                );


            }
        )
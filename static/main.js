function q_one_less(id) {
    location.href = location.href.split("?")[0] + "?name=" + id + "&quantity=-1&data=q"
};

function q_one_more(id) {
    location.href = location.href.split("?")[0] + "?name=" + id + "&quantity=1&data=q"
};

function m_one_less(id) {
    location.href = location.href.split("?")[0] + "?name=" + id + "&quantity=-1&data=m"
};

function m_one_more(id) {
    location.href = location.href.split("?")[0] + "?name=" + id + "&quantity=1&data=m"
};
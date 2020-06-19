import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function App(props) {
  return (
    <div className="m-3">
      {/* <div className="card-inner box">
        <div className="media">
          <img
            src={props.image}
            className="avatar rounded-circle p-2"
            alt="Person-image"
          />
          <div className="media-body">
            <h5 className="mt-0">
              {props.name}
              <small>
                <i>{props.position}</i>
              </small>
            </h5>
            <p>
              <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: 5 }} />
              {props.email}
            </p>
          </div>
        </div>
      </div> */}
      <div class="card align-middle" style={{ width: "18rem" }}>
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDQ4NDQ8QDg0ODw0ODw4NDw8NDQ0NFRIWFhURFRUYHSggGholJxUXITUhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy0lICIxMCsvLSsrLSswLS0tLi0tLS0tLS0rLS0tLS0rLS0vLS0tLS0tLS0vLS0rLystKysrL//AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgIDBAUHAQj/xABEEAACAgACBQkGAwUFCQEAAAAAAQIDBBEGEiExQQUUIlFhcYGRoQcTUlOT0TKCwTNikrHwI0KiwuEkNENjZHJzstIV/8QAGwEBAAEFAQAAAAAAAAAAAAAAAAECAwQFBgf/xAA1EQEAAQICBgcHBAMBAAAAAAAAAQIDBBEFEhQhMdETQVFTkZKhBiJhcYGxwTJCYuEjUvDx/9oADAMBAAIRAxEAPwDoZ5S3oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADW8scu4bBLPEWKMms41x6Vsu6K4dryRl4bBX8TP8Ajp3dvV4qaq4p4oZyj7SJ7VhqIwXCeIlrSf5YtJebN9Z9nqY33a8/hHOeSzN7saS7TzHyezEQh2V1V5eqZn06FwlP7c/nM81HS1dqmvTjHp/70n2Srp/+SqdD4Of2es80dLV2tpgvaJio/ta6bo/u61UvNZr0MS7oCxV+iqY9eX3VxelLORdMsJi2oOTotexQuySk+qM9z7nk+w0uK0RiLEa2WtHbH5jiu03YlIjVLgAAAAAAAAAAAAAAAAAAAAAAAAQ3TfTJYLPDYdp4lrpzyUlRnwy4z9Fx6je6L0T0/wDlu/p6o7f6Wbl3LdDlOKxtls5TnKTlJ5ylJuU5PrbZ19FFNFMU0xlEMWZmWMVKQAB6pNbnl3AX68TwltXWRkqiU90M0xlTKGGxc9fDyyjXdJ5yofBN8Yfy7t2g0pomm5E3bMZVdcdv9/f5r9u5lul0w5FkgAAAAAAAAAAAAAAAAAAAAAGl0u5bXJ+Csv2O15V0xf8Aeulnl4JJy/KZ+jsJtV+KJ4cZ+X98FFyrVjNwu66VkpTnJynJuUpPa3JvNtnfU0xTGUcIYMzmoJQAAAAABew9uq8n+F+hEpiXYfZ5yw8ThXTY87cM4wze+VL/AAN92Tj+VdZxmm8JFm90lPCvf9evmzLVWcZJUaVdAAAAAAAAAAAAAAAAAAAAAcr9ruOcsVh8Mn0aqna1wc7JNLyUP8R1vs9ZytV3O2cvD/1i3535IEdCxwCxZc89m7+YRm9hf1rxQM15PMJAAACa+zLGuGPhDPZdXbU12pa6f+H1NNpy1r4Wav8AWYn8flfsz7zrhxTLAAAAAAAAAAAAAAAAAAAAAcT9o12vyviVwrVFa7lVFv1kzutDUauDo+Oc+ssK7+uUaNotLFtufRjtz2bNrb6kEZuq6I6AUxwilyhRGeIteu4z1s6IZdGGx7Hxfa8uBiXL063uyyrdqMvehj8uezOiSbwc5YezhCxytol2ZvpR7833E04if3FViJ/S53ylydiMDa6cTW65bWs9sLI/FCS2Nf0zJpqiqM4Y9VM0zlKiMk1miUPQAG80Mv8Ad4/Cv/qKV4SlqP8AmYekKNbC3I/jPpvXLf6od1PPWcAAAAAAAAAAAAAAAAAAAAA4Lpvev/1Mc2837+S7diS/Q9A0ZGWEt/JgXJ96WjprsxFkKaYOdlklGFcNspS/rjuRnTlG+VvfO6HXdCdA6sDqYnE6t2L3x404d/udcv3n4ZccS5emrdHBl27MU754psWF55KKayYGp5a5GpxdTpxFasre1PdKEvijLfF9qJpqmmc4RVTFUZS5DpPojiOTZO2Gd+E+al0q11Wpbv8Au3d24zbd2K/mw67U0fJpISTWaLihUBsdHpZYzD/+ah+VkSxiYzs1/KftKuji+gGecM8AAAAAAAAAAAAAAAAAAAAByrGezzFY/H46+dkcLTPE2uqU4u2dqcvxKCayj2t+B3uBv004W3H8YYk2aqqplrfZbhsuUb3JdKmmyHdJ2JP/ANWZV+fdhFiPel2Cj8K8f5mIy1wIAPAMe2jfltT3xe3YEoTy17PcLfJ2YaTwlrzzUI69DfbXsy/K0uwv0X6o471mqxE8NyGaQ6L38nQjZdOqcJz93F1ues3quWbi1sWzrZfouRXwWK7c08Uj0a0BxH+zYyy2EHrU3e4cZOSr14y2y4SyW7LxMfE3Na3XRTG+YmPrkuUWp3S6kee5ZMoAAAAAAAAAAAAAAAAAAAABQdlgqoqw9Ex2RHhuQ5xolgHh+WeVoNNLWhOOfGFsrJrL+XgbK7VnRSsW4yrqdCwz6PiY6+uhAAAAUygnvQEL9peA97TgYpNxnjqaZdSVicV9vEvWJymfktXoziE2y6t3Asrqs4e5VFVdVUdczPjKoLYAAAAAAAAAAAAAAAAAAABTI6PQ17O3Nueqc/pP9olprK4xvlLJazai5ZLWcU20m+rpPzZuhsMM968SBkBAAAAALOKwsLoqNkdaMZ1WpPhZXNThLwcUInJExmvIwtIXuiw9U9c7o+qpWcgkAAAAAAAAAAAAAAAAAAAAAaL1i9VZriujjA1OPjlY+1J/p+h1mDxMYi3r5ZdWSF2ueWUkZQzIyTWaCFQAAAAFu7ci3RNc9UZipI5TGY2rEzGcZRHCEvTCSAAAAAAAAAAAAAAAAAAAAAAYnKNGtHWW+PrE22icVFu5NurhV9/75IYNFnB+B0wyq5uO7yAyYWKW7f1cQhWAA8A9ree7/Q02l8TFNHQxxnj8v7TCs5xIAAAAAAAAAAAAAAAAAAAAAAAAa/GYLfKC74/Y6DAaUjKLd6flPPn4oYtd2Wx/6o3gyIvPcBcjbJcfPaB77+XZ5Ae1wlPe+iYGMx9GHjLjV2cxlxjksluOVrrqrqmqqc5lL0oAAAAAAAAAAAAAAAAAAAAAAAAAz+S8ErddyzySSTXxdf8AXWb3Q2jKMXFdV3PKN0ZdvHP6fli4m9NvKKUe0j5OxGHslblr0PLKUVmor95cH27jf2cDOFtRRnnEdaq1fpubuEtTDGrimn2MqyX1+OKk9yl+bJEZDMwOFvxMtWtZ5b3uhHvZXRbmvdC3XcpojOpJcZyb7qqMk82mlLgknuy/ric/pLQ2y4eLsVTVOfvT8/7+6zZxOvXlP0a859lgAAAAAAAAAAAAAAAAAAAAAHkpJJttJLe28kiqmmap1aYzlEzERnLTY3SfC1ZqM3dLqqWsv4t3qbzC+zmOv76qdSP5bp8OPjk1V/TOFtbonWn4b/Xg0OM0vvnmqYQqXW/7Sfrs9GdJhfZTC0b71U1z5Y9N/q01/T1+vdbiKfWeXpLf+zvSOx3TwuKm5K569M55LK3LbX3NLZ2p9ZudjtWKMrNMUxHVH3W8Fjq7lyabtWczwz+zozWex7U+BabZGeVdE65SduHShPf7p7KpPs+F+ncYt3DxO+lmWsVMbq1rkvRmUunieivlxfSfe1u8PQt28NM761d3FxG6jxSimmNcVCEVGK3KKyRmxERGUMGapmc5RjT3lt4amOHqllfdtzW+upPbLvb2fxdRet4ei9ExcjOnsnra7H4qqzTEUTlVPpCHYTSW6GSsUbV1/gn5rZ6GoxfsrhLu+zM0T4x4Tv8AVaw+n8RRuuRFUeE+m70brCcv4e3Y5e6l1WdFfxbvU5nF+zmOw++KdeO2nf6cfDNvMPprC3t0zqz/AC3evD1bNPPatq7NxopiaZyni2sTExnD0hIAAAAAAAAAAAAAAAAoutjCLnOSjGKzcpPJJFy3aru1xRRGczwiFFddNFM1VTlEItynpglnHCw1v+bYmo+Ed/nl3HYYD2TmYirFVZfxp/M8vFzuK0/Ee7YjP4z+I55IzjcfdiHndZKfY3lFd0VsR1uFwOHwsZWaIp+/1njLQX8Vevzndqmft4cFNeHb2vYvUymNmyIVRjuW3re1hGavN702mmmpJ5SjJbU0+DQInLfDqWhuk0cdX7q1qOMqXTju97Ff8WK6utcH4GBdtak7uDpMHi4vU5T+qP8As17TLl9cn4bOGTxNucKIvb0uM2uqOfnkuJFq3r1fBVjMTFmjOOM8P++DX6A6RyxdcsNiJZ4qnbrPfdV8Xetz8HxKr9vVnOOC1gMV0tOrVO+PWEi5X5TqwdE8Rc8oRWxL8U5cIRXFstU0zVOUMy7dptUzVU49yjj7MVdPEXfjseeqtqrivwwXYvu+JsqKYpjKHLXrs3a5rnrYxUtAGRhMdbR+ynKK+HfB/leww8XgMNi4yvURPx6/GN7Jw+LvYef8VUx8Orw4N9gdJ1sjiIZfv15teMd/lmcnjvZKYzqwtWf8avxPOPq6DC+0MTuxFOXxjlx8M2/ovhZFTrkpRe5xeaORv4e7Yrm3dpmmY6p/71dFavUXade3OcfBcLK4AAAAAAAAAAAAAAiWneK/Y0J7HrWyXdsj/m8jtfZHDR/kvz8KY+8/hzPtDe/Raj5z9o/KJHbOaXMNHOS7NoRPBmkqAABS9aMo2VycLYPOM4txkn2NbiJjPiqpqmmc4XMTi78TZ77FWStsUVCLll0YrgktiIppindCu7druTnVOb3D4mzD214ih6ttTzi96a4xa4p7Vl2iqmKoylFq5VbqiqnjC7ynyricfYrcVPNRz93XFatdefVH9XmyKLdNEbly/iK7051TyY5WxwAAAAbLkDGOnEQWfQsahJcG3si+/PL1NJp/BU4nBVzl71Ea0T8t8x9Yz+uTZ6JxM2MTTGe6rdP14evpmm55c7wAAAAAAAAAAAAABz3S2/Xxti4VqFa8Fm/WTPTvZyz0ej6J/wBs6vGco9IhxGmbmvi6vhlH5+8tMb1q2Vg1vfcgplkEqQAAAAAAAAAAAAPVJrat62rvW4iYiqMp4SnOY3xxh0WmzXhGa3SjGS7mszxm9bm1cqtz+2ZjwnJ6XbriuiKo64z8VZaVgAAAAAAAAAAAAcrxt3vbrbPjssku5yeR7JhbPQ2KLf8ArER4Q85v3Oku1V9szPqsF9aZuGWUF25sKJXSUAAAAAAAAAAAAAAJ1yFZrYSl9UNX+F6v6HlOnbfR6Qux2zn4xE/l3+iq9fB25+GXhu/DPNS2AAAAAAAAAAAAMXlS/wB1h7rOMKrGu/VeRmaPs9NirVvtqjwz3+jHxdzo7FdfZE/Zy5Hr7zuAJbCtZRS7ESoVBAAAAAAAAAAAAAACYaKWZ4XL4LJx88pf5jzf2qo1cfn20xP3j8O00BXnhMuyZj8/luTm27AAAAAAAAAACidsY734cSqKZngmKZng0uk2Ic8JZCuMpSm4R6KbeWsm9i7jeez9umnHUV3KoiKYmd85dWUcfm12mLdzZKooiZmcoyiM+vehPMrvk2/Tn9j0TbcN3lPmjm4zY8R3dXlnkRwN2a/sbfpz+w23Dd5T5o5mx4ju6vLPJn82s+XZ9Of2G24bvKfNHNRseJ7ury1cjm1ny7Ppz+w23Dd5T5o5mx4nu6vLVyObWfLs+nP7DbcN3lPmjmbHie7q8tXI5tZ8uz6c/sNtw3eU+aOZseJ7ury1cjm1ny7Ppz+w23Dd5T5o5mx4nu6/LVyObWfLs+nP7DbcN3lPmjmbHie7r8tXI5tZ8uz6c/sNtw3eU+aOZseJ7uvy1cjm1ny7Ppz+w23Dd5T5o5mx4nu6vLVyObWfLs+nP7DbcN3lPmjmbHie7q8tXI5tZ8uz6c/sNtw3eU+aOZseJ7ury1cjm1ny7Ppz+w23Dd5T5o5mx4nu6/LVyObWfLs+nP7DbcN3lPmjmbHie7r8tXI5tZ8uz6c/sNtw3eU+aOZseJ7uvy1cjm1ny7Ppz+w23Dd5T5o5mx4nu6/LVySLRix1V2RnCUc5qSzTj/dS49xxftTNu9et126ondMbpiev4fN1Xs9Yu02q4rpmnfnviY6vj8m+hfGW57ep7DlJomG+miYXChSAAAAAAAAAMe7DazbTyb69xdpuZbpXKbmW5Ylhprhn3MuRcplXFyFt1yW9PyKs4Va0dqklIAAAAAAAAAAAAAABUoN7k34MjOEZwrjh5vhl35IpmumETXSvV4T4n4Iom72KJudjKLK0AAAAAAAAAAAAAaJFLrj8K8kTrT2pzlT7mPwoa9Xaa09rzm8Ph9WT0lXanXqec2h1erJ6So16jmsOp+bHSVJ6So5rDqfmOkqOkqOaw6n5jpKjpKjmsOp+bHSVHSVHNodXqx0lSNep7zeHw+rI6So16nvuI/Chr1dprVdr1VR+FeSI1p7Ua0qkkQh6QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/9k="
          class=" rounded-circle mt-4 "
          alt="..."
        />
        <div class="card-body main">
          <h5 class="card-title">{props.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{props.position}</h6>
          <p class="card-text">{props.email}</p>
        </div>
      </div>
    </div>
  );
}

export default App;

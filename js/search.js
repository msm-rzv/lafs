
const searchData = {
    writers: [
        {
            name: "Ahmad Faraz",
            url: "Writers/Ahmad_Faraz.html",
            category: "Writer"
        },
        {
            name: "Allama Iqbal",
            url: "Writers/Allama_Iqbal.html",
            category: "Writer"
        },
        {
            name: "Faiz Ahmad Faiz",
            url: "Writers/Faiz_Ahmad_Faiz.html",
            category: "Writer"
        },
        {
            name: "Iftikhar Arif",
            url: "Writers/IftikharArif.html",
            category: "Writer"
        },
        {
            name: "Jaun Eliya",
            url: "Writers/Jaun_Eliya.html",
            category: "Writer"
        },
        {
            name: "Kaifi Azmi",
            url: "Writers/Kaifi_Azmi.html",
            category: "Writer"
        },
        {
            name: "Mirza Ghalib",
            url: "Writers/Mirza_Ghalib.html",
            category: "Writer"
        },
        {
            name: "Munir Niazi",
            url: "Writers/Munir_Niazi.html",
            category: "Writer"
        },
        {
            name: "Parveen Shakir",
            url: "Writers/Parveen_Shakir.html",
            category: "Writer"
        }
    ],
    poems: [
        // Ahmad Faraz Poems
        {
            name: "Muhasara",
            url: "Poems/AhmadFarazPoems/Muhasara.html",
            category: "Poem",
            author: "Ahmad Faraz"
        },
        {
            name: "Ranjish",
            url: "Poems/AhmadFarazPoems/Ranjish.html",
            category: "Poem",
            author: "Ahmad Faraz"
        },
        {
            name: "Suna Hai",
            url: "Poems/AhmadFarazPoems/SunaHai.html",
            category: "Poem",
            author: "Ahmad Faraz"
        },
        {
            name: "Ye Meri",
            url: "Poems/AhmadFarazPoems/YeMeri.html",
            category: "Poem",
            author: "Ahmad Faraz"
        },
        // Allama Iqbal Poems
        {
            name: "Himalaya",
            url: "Poems/AllamaIqbalPoems/Himalaya.html",
            category: "Poem",
            author: "Allama Iqbal"
        },
        {
            name: "Jawab e Shikwa",
            url: "Poems/AllamaIqbalPoems/JawabeShikwa.html",
            category: "Poem",
            author: "Allama Iqbal"
        },
        {
            name: "Masjid e Qurtuba",
            url: "Poems/AllamaIqbalPoems/Masjid-e-Qurtuba.html",
            category: "Poem",
            author: "Allama Iqbal"
        },
        {
            name: "Shikwa",
            url: "Poems/AllamaIqbalPoems/Shikwa.html",
            category: "Poem",
            author: "Allama Iqbal"
        },
        {
            name: "Tulu e Islam",
            url: "Poems/AllamaIqbalPoems/Tulu-e-Islam.html",
            category: "Poem",
            author: "Allama Iqbal"
        },
        // Faiz Ahmad Faiz Poems
        {
            name: "Bol Ke",
            url: "Poems/FaizAhmadFaizPoems/BolKe.html",
            category: "Poem",
            author: "Faiz Ahmad Faiz"
        },
        {
            name: "Gulon Mein",
            url: "Poems/FaizAhmadFaizPoems/GulonMein.html",
            category: "Poem",
            author: "Faiz Ahmad Faiz"
        },
        {
            name: "Hum Dekhenge",
            url: "Poems/FaizAhmadFaizPoems/HumDekhenge.html",
            category: "Poem",
            author: "Faiz Ahmad Faiz"
        },
        {
            name: "Mujh Se Pehli",
            url: "Poems/FaizAhmadFaizPoems/MujhSePehli.html",
            category: "Poem",
            author: "Faiz Ahmad Faiz"
        },
        {
            name: "Nisar Mein",
            url: "Poems/FaizAhmadFaizPoems/NisarMein.html",
            category: "Poem",
            author: "Faiz Ahmad Faiz"
        },
        
        // Iftikhar Arif Poems
        {
            name: "Khwab",
            url: "Poems/IftikharArifpoems/Khwab.html",
            category: "Poem",
            author: "Iftikhar Arif"
        },
        {
            name: "Kuch",
            url: "Poems/IftikharArifpoems/Kuch.html",
            category: "Poem",
            author: "Iftikhar Arif"
        },
        {
            name: "Mere Khuda",
            url: "Poems/IftikharArifpoems/Merekhuda.html",
            category: "Poem",
            author: "Iftikhar Arif"
        },
        {
            name: "Mohabbat Ki Ek Nazm",
            url: "Poems/IftikharArifpoems/Mohabbat.html",
            category: "Poem",
            author: "Iftikhar Arif"
        },
        // Jaun Eliya Poems
        {
            name: "Be Karari Se",
            url: "Poems/JaunEliyaPoems/BekarariSe.html",
            category: "Poem",
            author: "Jaun Eliya"
        },
        {
            name: "Saza",
            url: "Poems/JaunEliyaPoems/Saza.html",
            category: "Poem",
            author: "Jaun Eliya"
        },
        {
            name: "Umr Guzregi",
            url: "Poems/JaunEliyaPoems/UmrGuzregi.html",
            category: "Poem",
            author: "Jaun Eliya"
        },
        {
            name: "Zindagi Kya Hai",
            url: "Poems/JaunEliyaPoems/ZindagiKyaHai.html",
            category: "Poem",
            author: "Jaun Eliya"
        },
        // Kaifi Azmi Poems
        {
            name: "Aurat",
            url: "Poems/KaifiAzmiPoems/Aurat.html",
            category: "Poem",
            author: "Kaifi Azmi"
        },
        {
            name: "Main Dhundta",
            url: "Poems/KaifiAzmiPoems/MainDhundta.html",
            category: "Poem",
            author: "Kaifi Azmi"
        },
        {
            name: "Makaan",
            url: "Poems/KaifiAzmiPoems/Makaan.html",
            category: "Poem",
            author: "Kaifi Azmi"
        },
        {
            name: "TumItna",
            url: "Poems/KaifiAzmiPoems/TumItna.html",
            category: "Poem",
            author: "Kaifi Azmi"
        },
        // Mirza Ghalib Poems
        {
            name: "Bazicha-e-Atfal",
            url: "Poems/MirzaGhalibPoems/Bazicha.html",
            category: "Poem",
            author: "Mirza Ghalib"
        },
        {
            name: "Dil hi to Hai",
            url: "Poems/MirzaGhalibPoems/DilHiToHai.html",
            category: "Poem",
            author: "Mirza Ghalib"
        },
        {
            name: "Sab Kahan",
            url: "Poems/MirzaGhalibPoems/SabKahan.html",
            category: "Poem",
            author: "Mirza Ghalib"
        },
        {
            name: "Ye Na Thi",
            url: "Poems/MirzaGhalibPoems/YeNaThi.html",
            category: "Poem",
            author: "Mirza Ghalib"
        },
        // Munir Niazi Poems
        {
            name: "Hamesha Dair",
            url: "Poems/MunirNiaziPoems/HameshaDair.html",
            category: "Poem",
            author: "Munir Niazi"
        },
        {
            name: "Kuch Baaten",
            url: "Poems/MunirNiaziPoems/KuchBaaten.html",
            category: "Poem",
            author: "Munir Niazi"
        },
        {
            name: "Mohabbat Nahi",
            url: "Poems/MunirNiaziPoems/MohabbatAbNahi.html",
            category: "Poem",
            author: "Munir Niazi"
        },
        {
            name: "Sapna Aage",
            url: "Poems/MunirNiaziPoems/SapnaAage.html",
            category: "Poem",
            author: "Munir Niazi"
        },
        // Parveen Shakir Poems
        {
            name: "Barish",
            url: "Poems/ParveenShakirPoems/Barish.html",
            category: "Poem",
            author: "Parveen Shakir"
        },
        {
            name: "Khushbu",
            url: "Poems/ParveenShakirPoems/Khushbu.html",
            category: "Poem",
            author: "Parveen Shakir"
        },
        {
            name: "Lautne ka Ehsas",
            url: "Poems/ParveenShakirPoems/LautnekaIrada.html",
            category: "Poem",
            author: "Parveen Shakir"
        },
        {
            name: "Natak",
            url: "Poems/ParveenShakirPoems/Natak.html",
            category: "Poem",
            author: "Parveen Shakir"
        }
    ],
    genres: [
        {
            name: "Mystical",
            url: "Poetry/Mystical.html",
            category: "Genre"
        },
        {
            name: "Nature",
            url: "Poetry/Nature.html",
            category: "Genre"
        },
        {
            name: "Romantic",
            url: "Poetry/Romantic.html",
            category: "Genre"
        },
        {
            name: "Social",
            url: "Poetry/Social.html",
            category: "Genre"
        },
        {
            name: "Spiritual",
            url: "Poetry/Spiritual.html",
            category: "Genre"
        }
    ]
};

// Function to determine the current page's folder depth
function getCurrentPagePath() {
    // Simple approach: always use relative paths from root
    const pathSegments = window.location.pathname.split('/').filter(segment => segment !== '');
    
    // Remove the last segment (filename)
    const depth = pathSegments.length - 1;
    
    // For GitHub Pages, we might need to account for repository name
    const isGitHubPages = window.location.hostname.includes('github.io');
    const actualDepth = isGitHubPages ? Math.max(0, depth - 1) : Math.max(0, depth);
    
    let prefix = '';
    for (let i = 0; i < actualDepth; i++) {
        prefix += '../';
    }
    
    return prefix;
}

// Function to adjust URLs based on current page location
function adjustUrlsForCurrentPage(data) {
    const prefix = getCurrentPagePath();
    
    return data.map(item => ({
        ...item,
        url: prefix + item.url
    }));
}

// Get adjusted search data for current page
function getAdjustedSearchData() {
    const prefix = getCurrentPagePath();
    
    return [
        ...adjustUrlsForCurrentPage(searchData.writers),
        ...adjustUrlsForCurrentPage(searchData.poems),
        ...adjustUrlsForCurrentPage(searchData.genres)
    ];
}

// Search function
function searchItems(query) {
    if (!query || query.trim() === '') {
        return [];
    }
    
    const searchTerm = query.toLowerCase().trim();
    const allSearchData = getAdjustedSearchData();
    
    return allSearchData.filter(item => {
        const nameMatch = item.name.toLowerCase().includes(searchTerm);
        const authorMatch = item.author && item.author.toLowerCase().includes(searchTerm);
        const categoryMatch = item.category.toLowerCase().includes(searchTerm);
        
        return nameMatch || authorMatch || categoryMatch;
    });
}

// DOM manipulation functions
function toggleSearch() {
    const searchContainer = document.getElementById('search-container');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    
    if (searchContainer.classList.contains('active')) {
        // Close search
        searchContainer.classList.remove('active');
        searchInput.value = '';
        hideSearchResults();
        searchButton.style.display = 'block';
    } else {
        // Open search
        searchContainer.classList.add('active');
        searchButton.style.display = 'none';
        setTimeout(() => {
            searchInput.focus();
        }, 300);
    }
}

function handleSearch() {
    const searchInput = document.getElementById('search-input');
    const query = searchInput.value;
    const results = searchItems(query);
    
    if (query.trim() === '') {
        hideSearchResults();
        return;
    }
    
    displaySearchResults(results);
}

function displaySearchResults(results) {
    const resultsContainer = document.getElementById('search-results');
    
    if (results.length === 0) {
        resultsContainer.innerHTML = '<div class="no-results">No results found</div>';
        resultsContainer.style.display = 'block';
        return;
    }
    
    const resultsHTML = results.map(item => `
        <div class="search-result-item" onclick="navigateToResult('${item.url}')">
            <div class="result-name">${item.name}</div>
            <div class="result-category">${item.category}${item.author ? ' • ' + item.author : ''}</div>
        </div>
    `).join('');
    
    resultsContainer.innerHTML = resultsHTML;
    resultsContainer.style.display = 'block';
}

function hideSearchResults() {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.style.display = 'none';
}

function navigateToResult(url) {
    window.location.href = url;
}

// Close search when clicking outside
document.addEventListener('click', function(event) {
    const searchContainer = document.getElementById('search-container');
    const searchButton = document.getElementById('search-button');
    
    if (!searchContainer.contains(event.target) && !searchButton.contains(event.target)) {
        if (searchContainer.classList.contains('active')) {
            toggleSearch();
        }
    }
});

// Initialize search functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const results = searchItems(searchInput.value);
                if (results.length > 0) {
                    navigateToResult(results[0].url);
                }
            }
        });
    }
});
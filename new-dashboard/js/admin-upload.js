// Admin Upload Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    const uploadBtn = document.getElementById('uploadBtn');
    const uploadModal = document.getElementById('uploadModal');
    const closeModal = document.getElementById('closeModal');
    const cancelBtn = document.getElementById('cancelBtn');
    const uploadForm = document.getElementById('uploadForm');
    const fileUpload = document.getElementById('fileUpload');
    const fileNameDisplay = document.getElementById('fileNameDisplay');
    const selectedFileName = document.getElementById('selectedFileName');
    const removeFile = document.getElementById('removeFile');
    const downloadSampleBtn = document.getElementById('downloadSampleBtn');

    // Open Modal
    if (uploadBtn) {
        uploadBtn.addEventListener('click', function() {
            uploadModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    // Close Modal
    function closeModalFunc() {
        uploadModal.classList.remove('active');
        document.body.style.overflow = '';
        uploadForm.reset();
        fileNameDisplay.style.display = 'none';
    }

    if (closeModal) {
        closeModal.addEventListener('click', closeModalFunc);
    }

    if (cancelBtn) {
        cancelBtn.addEventListener('click', closeModalFunc);
    }

    // Close modal when clicking outside
    if (uploadModal) {
        uploadModal.addEventListener('click', function(e) {
            if (e.target === uploadModal) {
                closeModalFunc();
            }
        });
    }

    // File Upload Handler
    if (fileUpload) {
        fileUpload.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                selectedFileName.textContent = file.name;
                fileNameDisplay.style.display = 'flex';
            }
        });
    }

    // Remove File
    if (removeFile) {
        removeFile.addEventListener('click', function() {
            fileUpload.value = '';
            fileNameDisplay.style.display = 'none';
        });
    }

    // Download Sample File
    if (downloadSampleBtn) {
        downloadSampleBtn.addEventListener('click', function() {
            // Download the actual sample file from root folder
            const link = document.createElement('a');
            link.setAttribute('href', 'sample upload file.xlsx');
            link.setAttribute('download', 'sample upload file.xlsx');
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    // Form Submission
    if (uploadForm) {
        uploadForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const year = document.getElementById('yearSelect').value;
            const department = document.getElementById('departmentSelect').value;
            const file = fileUpload.files[0];

            // Validation
            if (!year || !department || !file) {
                alert('Please fill in all required fields');
                return;
            }

            // File size validation (10MB)
            if (file.size > 10 * 1024 * 1024) {
                alert('File size must be less than 10MB');
                return;
            }

            // File type validation
            const validTypes = ['text/csv', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
            if (!validTypes.includes(file.type) && !file.name.endsWith('.csv') && !file.name.endsWith('.xlsx') && !file.name.endsWith('.xls')) {
                alert('Please upload a valid CSV or Excel file');
                return;
            }

            // Here you would typically send the file to the server
            // For now, we'll just show a success message
            console.log('Uploading file:', {
                year: year,
                department: department,
                fileName: file.name,
                fileSize: file.size
            });

            // Simulate upload
            alert('File uploaded successfully!');
            closeModalFunc();

            // In a real application, you would:
            // const formData = new FormData();
            // formData.append('file', file);
            // formData.append('year', year);
            // formData.append('department', department);
            // 
            // fetch('/api/upload', {
            //     method: 'POST',
            //     body: formData
            // })
            // .then(response => response.json())
            // .then(data => {
            //     console.log('Upload successful:', data);
            //     // Refresh the table
            //     location.reload();
            // })
            // .catch(error => {
            //     console.error('Upload error:', error);
            //     alert('Error uploading file. Please try again.');
            // });
        });
    }

    // Refresh button
    const refreshBtn = document.getElementById('refreshBtn');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', function() {
            // In a real application, this would fetch updated data from the server
            location.reload();
        });
    }

    // Delete file handlers
    const deleteButtons = document.querySelectorAll('.btn-icon-small');
    deleteButtons.forEach(btn => {
        if (btn.querySelector('.ri-delete-bin-line')) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                if (confirm('Are you sure you want to delete this file?')) {
                    // In a real application, this would send a delete request to the server
                    const row = this.closest('tr');
                    row.style.opacity = '0.5';
                    setTimeout(() => {
                        row.remove();
                    }, 300);
                }
            });
        }
    });

    // Filter functionality
    const filterUploadedBy = document.getElementById('filterUploadedBy');
    const filterDepartment = document.getElementById('filterDepartment');
    const filterYear = document.getElementById('filterYear');
    const clearFiltersBtn = document.getElementById('clearFiltersBtn');
    const tableRows = document.querySelectorAll('#filesTableBody tr');

    function filterTable() {
        const uploadedByValue = filterUploadedBy.value;
        const departmentValue = filterDepartment.value;
        const yearValue = filterYear.value;

        tableRows.forEach(row => {
            const uploadedBy = row.getAttribute('data-uploaded-by');
            const department = row.getAttribute('data-department');
            const year = row.getAttribute('data-year');

            let showRow = true;

            if (uploadedByValue && uploadedBy !== uploadedByValue) {
                showRow = false;
            }

            if (departmentValue && department !== departmentValue) {
                showRow = false;
            }

            if (yearValue && year !== yearValue) {
                showRow = false;
            }

            if (showRow) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }

    // Add event listeners to filters
    if (filterUploadedBy) {
        filterUploadedBy.addEventListener('change', filterTable);
    }

    if (filterDepartment) {
        filterDepartment.addEventListener('change', filterTable);
    }

    if (filterYear) {
        filterYear.addEventListener('change', filterTable);
    }

    // Clear filters
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', function() {
            filterUploadedBy.value = '';
            filterDepartment.value = '';
            filterYear.value = '';
            filterTable();
        });
    }
});
